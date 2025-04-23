// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import authReducer from './slice/authSlice';
import axios from 'axios';
import { logout } from './slice/authSlice';

// Middleware to persist cart state to localStorage
const persistCartMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Check if the action affects the cart state
  if (
    action.type.endsWith('/addToCart') ||
    action.type.endsWith('/removeFromCart') ||
    action.type.endsWith('/incrementQuantity') ||
    action.type.endsWith('/decrementQuantity')
  ) {
    const cartState = store.getState().cart;
    localStorage.setItem('cart', JSON.stringify(cartState));
  }
  return result;
};

// Configure the store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistCartMiddleware),
});




// Configure axios interceptor AFTER store creation
// axios.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response?.status === 401) {
//       store.dispatch({ type: 'auth/logout' });
//       // Optional: Redirect to login with session expired message
//       window.location.href = '/login?session_expired=1';
//     }
//     return Promise.reject(error);
//   }
// );




axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      store.dispatch(logout());
      window.location.href = '/login?session_expired=true';
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(config => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});