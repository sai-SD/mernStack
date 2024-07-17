import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import About from '../Pages/About'
import Login from '../Pages/Login'
import Product from '../Pages/Product'
import SingleProduct from '../Pages/SingleProduct'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PrivateRoute><HomePage /></PrivateRoute>} />;
        <Route path='/about' element={<About />} />;
        <Route path='/login' element={<Login />} />;
        <Route path='/products' element={<PrivateRoute><Product /></PrivateRoute>} />;
        <Route path='/product/:id' element={<PrivateRoute><SingleProduct /></PrivateRoute>} />;

    </Routes>
  )
}

export default AllRoutes