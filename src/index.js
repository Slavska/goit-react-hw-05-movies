import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer
      autoClose={1000}
      pauseOnFocusLoss={false}
      transition={Flip}
    />
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
