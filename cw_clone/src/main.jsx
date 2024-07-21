import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// import Theme from './components/Theme';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <ChakraProvider theme={Theme}>
  <ChakraProvider>
    <App />
  </ChakraProvider>
)