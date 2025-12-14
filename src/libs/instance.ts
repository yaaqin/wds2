import toast from 'react-hot-toast';
import axios, { AxiosInstance } from 'axios';
import qs from "qs";
import { deleteCookie } from 'cookies-next'
import { getAccessToken } from '../utils/tokens';
// import Router from 'next/router'

// Base URL untuk Axios
const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

// Axios for private data
export const axiosPrivate: AxiosInstance = axios.create({ baseURL })

// const router = useRouter()


axiosPrivate.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken()
    if (accessToken) {
      config.headers['Authorization'] = accessToken
    }
    return config
  }
)

axiosPrivate.interceptors.response.use(
  (res) => {
    const method = res.config.method?.toUpperCase();
    const url = res.config.url;
    const params = res.config.params;

    const fullUrl = params ? `${url}?${qs.stringify(params)}` : url;


    // toast.success(`Endpoint buat BE [${method}] ${fullUrl}`);
    return res;
  },
  async (err) => {
    const originalReq = err.config;

    const status = err.response?.status;
    const message = err.response?.data?.message || 'Terjadi kesalahan';

    if (status === 401 && !originalReq._retry) {
      originalReq._retry = true

      deleteCookie('token')

      // toast.error('Unauthorized: Sesi kamu mungkin sudah habis.')

      if (typeof window !== 'undefined') {
        window.location.href = '/login'
      }

      return Promise.reject(err)
    } else if (status === 403) {
      // toast.error('Forbidden: Kamu tidak punya akses.');
    } else if (status >= 500) {
      // toast.error(`Server error (${status}): ${message}`);
    } else {
      // toast.error(`Error ${status || ''}: ${message}`);
    }

    return Promise.reject(err);
  }
);


// Axios for public data
export const axiosPublic = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosPublic.interceptors.request.use(
  (config) => {
    if (typeof window === 'undefined') {
      config.headers['x-ssr-request'] = 'true';
    }

    return config;
  },
  (error) => {
    // Tangani error sebelum request dikirim
    return Promise.reject(error);
  }
);

axiosPublic.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || 'Terjadi kesalahan';

    // Tampilkan error ke user
    // toast.error(`Error ${status}: ${message}`);

    return Promise.reject(error);
  }
);


// Axios for developer data
const URLUploads = process.env.NEXT_PUBLIC_API_UPLOAD_IMAGE;
const UPLOADKEY = process.env.NEXT_PUBLIC_KEY_IMAGE_ACCESS;

export const axiosDev = axios.create({
  baseURL: URLUploads,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosDev.interceptors.request.use(
  (config) => {
    if (typeof window === 'undefined') {
      config.headers['x-ssr-request'] = 'true';
    }
    config.headers['x-api-key'] = UPLOADKEY


    return config;
  },
  (error) => {
    // Tangani error sebelum request dikirim
    return Promise.reject(error);
  }
);

axiosDev.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || 'Terjadi kesalahan';

    // Tampilkan error ke user
    // toast.error(`Error ${status}: ${message}`);

    return Promise.reject(error);
  }
);