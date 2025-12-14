import { getCookie } from "cookies-next";
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  role?: string;
  [key: string]: any;
}


export const getAccessToken = async (): Promise<string | null> => {
  const token = await getCookie('token');
  return token ? token : null;  
}

export const decodeToken = (token: string): DecodedToken | null => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded;
  } catch (error) {
    console.error('Gagal mendecode token:', error);
    return null;
  }
};