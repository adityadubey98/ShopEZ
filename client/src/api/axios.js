import axios from 'axios';

[cite_start]// Get the backend URL from environment variables [cite: 1]
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: VITE_BACKEND_URL,
  withCredentials: true, // This tells axios to send the cookie
});

export default axiosInstance;