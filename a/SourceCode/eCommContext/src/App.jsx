import { useState } from 'react'
import AllRoutes from './Components/AllRoutes'
import Navbar from './Components/Navbar'
import { Button } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'

function App() {
  
  return (
    <>
      <Navbar />
      <AllRoutes />

    </>
  )
}

export default App


//vite app
//npm i 
//browser Router