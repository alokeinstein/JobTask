// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {store} from './store/store.js'
// import { Provider } from 'react-redux'

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )

// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { store } from './store/store.js';
import './index.css';
import AuthInitializer from './components/auth/AuthInitializer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      
        {/* Wrap App with AuthInitializer */}
        <AuthInitializer>
          <App />
        </AuthInitializer>
      
    </Provider>
  </StrictMode>
);