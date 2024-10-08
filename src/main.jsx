import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { DropProvider } from './contextapi/dropDownContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <DropProvider>
          <App />
        </DropProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);

