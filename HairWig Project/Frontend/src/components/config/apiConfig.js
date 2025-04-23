//src/components/config/apiConfig.js
import axios from 'axios';
import {store} from '../../store/store'; // Import your Redux store
export const API_BASE_URL = "https://hairlyf-backend-api.onrender.com"

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch({ type: 'auth/logout' });
      window.location.href = '/login?session_expired=true';
    }
    return Promise.reject(error);
  }
);

export default api;
