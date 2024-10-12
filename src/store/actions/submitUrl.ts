import { apiEndpoints } from '../../enum/apiEndpoints';
import BASE_API_URL from '../../config';
import axios from 'axios';
import { setLoading, addData, addSessionId } from '../actions';
import { TokenService } from 'services/token.service';
export const submitUrl = (url: string) => {

   // New function to create an audit session
  const createAuditSession = async () => {
    console.log(getToken());
    const response = await axios.post(`${BASE_API_URL}/audit/new`, {}, 
    {
      headers: {
        Authorization: `Bearer ${getToken()}`, // Headers should be a separate argument
      },
    });
    return response.data; // This will return the auditId
  };
  
  const getToken = () => {
    /*if (!TokenService.isTokenValid()) {
      throw new Error("Authorization token is missing or invalid.");
    }*/
    return TokenService.getToken();
  }

  // New function to call the backend crawler
  const callBackendCrawler = async (auditId: string) => {
    const response = await axios.post(`${BASE_API_URL}/crawler/crawl`, 
    { 
      url,
      auditId 
    },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  };
  
  return async (dispatch: any) => {
    dispatch(setLoading(true));
    try {
      // Create the audit session
      const auditSession = await createAuditSession();
      dispatch(addSessionId(auditSession.auditId));

      // Call the backend crawler
      await callBackendCrawler(auditSession.auditId);

      // Proceed with multiple API calls
      for (const endpoint of apiEndpoints) {
        const response = await axios.get(`${BASE_API_URL}/${endpoint.apiEndPoint}`, {
          params: {
            url,
            auditId: auditSession.auditId,
          },
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        dispatch(addData(response.data, endpoint.type));
      }
    } catch (error) {
      console.error("Error creating audit session or fetching data:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
