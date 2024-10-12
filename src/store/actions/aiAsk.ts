import BASE_API_URL from '../../config';
import { TokenService } from 'services/token.service';
import { addAiResponse, setLoading } from 'store/actions';

const getToken = () => {
  if (!TokenService.isTokenValid()) {
    throw new Error("Authorization token is missing or invalid.");
  }
  return TokenService.getToken();
};

function processChunk(value: Uint8Array | undefined, done: boolean, dispatch: (action: any) => void) {
  try {
    const decoder = new TextDecoder();
    return  JSON.parse(decoder.decode(value || new Uint8Array(), { stream: !done }));
    // Process the chunk here if needed
  } catch (error) {
    if (done) {
      dispatch(setLoading(false));
    }
    return {response:''};
  }
}

export const aiAsk = async (seoSubject: string, responseType: string, dispatch: any, sessionId: string) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch(`${BASE_API_URL}/ai/ask`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ seoSubject, sessionId }),
    });

    if (!response.body) {
      console.error("No response body");
      return;
    }

    const reader = response.body.getReader();

    let done = false;
    let accumulatedResponse = '';

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;
      const chunk = processChunk(value, done, dispatch);
      accumulatedResponse += chunk?.response ? chunk?.response : '';
      dispatch(addAiResponse(accumulatedResponse, responseType));
      if (done) {
        dispatch(setLoading(false));
      }
    }
    
    
  } catch (error) {
    console.error('Error during AI ask:', error);
    return null;
  }
};
