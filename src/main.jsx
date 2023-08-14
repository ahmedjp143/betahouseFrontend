import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const myColors = createTheme({
  palette: {
    primary: {
      main: '#6495ed',
      normal: '#1d2951',
      ahmed: '#c4ffac',
      buton: '#f1f2f1',
      side: '#C8B568',
    },
  },
});

// react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserContextprovider } from './contextApi/Context.jsx';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={myColors}>
        <BrowserRouter>
          <UserContextprovider>
            <App />
          </UserContextprovider>

          <ToastContainer />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
