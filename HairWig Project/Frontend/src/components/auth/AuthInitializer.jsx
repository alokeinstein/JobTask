// // AuthInitializer.jsx
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// const AuthInitializer = ({ children }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     console.log(token)
//     const user = JSON.parse(localStorage.getItem('user'));
//     console.log(user)
    
//     if (token && user) {
//       // Dispatch the login success action directly
//       dispatch({
//         type: 'auth/login/fulfilled',
//         payload: { token, user }
//       });
//     }
//   }, [dispatch]);

//   return children;
// };

// export default AuthInitializer;













// AuthInitializer.jsx (sessionStorage version)
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// const AuthInitializer = ({ children }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const token = sessionStorage.getItem('token');
//     const user = sessionStorage.getItem('user');
//     console.log(user)
    
//     if (token && user) {
//       dispatch({
//         type: 'auth/login/fulfilled',
//         payload: { 
//           token,
//           user: JSON.parse(user) 
//         }  
//       });
//     } else {
//       dispatch({ type: 'auth/logout' });
//     }
//   }, [dispatch]);

//   return children;
// };

// export default AuthInitializer;




// AuthInitializer.jsx
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { API_BASE_URL } from '../../components/config/apiConfig';

// const AuthInitializer = ({ children }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const token = sessionStorage.getItem('token');
//     const user = sessionStorage.getItem('user');
    
//     if (token && user) {
//       // Verify token with backend before restoring session
//       axios.get(`${API_BASE_URL}/auth/validate`, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => {
//         dispatch({
//           type: 'auth/login/fulfilled',
//           payload: { token, user: JSON.parse(user) }
//         });
//       })
//       .catch(() => {
//         sessionStorage.clear();
//         dispatch({ type: 'auth/logout' });
//       });
//     }
//   }, [dispatch]);

//   return children;
// };

// export default AuthInitializer;





import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeAuth } from '../../store/slice/authSlice';

 const AuthInitializer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  return children;
};

export default AuthInitializer;