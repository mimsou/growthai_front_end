export class TokenService {
    static getToken(): string | null {
      return localStorage.getItem('token');
    }
  
    static isTokenValid(): boolean {
      const token = this.getToken();
      return !!token; // Check if the token exists
    }
  }