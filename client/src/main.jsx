import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme.js';
import { createContext } from 'react';
import UserStore from './store/UserStore.js';
import { BrowserRouter } from 'react-router-dom';
import ItemStore from './store/ItemStore.js';

export const Context = createContext(null);

createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
    user: new UserStore(),
    item: new ItemStore()
  }}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>       
      </ChakraProvider>
    </Context.Provider>
);
