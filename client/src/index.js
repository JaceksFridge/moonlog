import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './blocks/userContext'
import { ModalProvider } from './blocks/modalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </UserProvider>
  </React.StrictMode>
);

