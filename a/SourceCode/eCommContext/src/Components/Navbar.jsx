import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    let data = [
        {path: '/', title: 'Home'},
        {path: '/about', title: 'About'},
        {path: '/products', title: 'All Products'},
        {path: '/login', title: 'Login'}
    ]
  return (
    <div style={{ display:"flex", justifyContent:"space-between", width:"80%", margin:"auto", border:"1px solid red"}}>
        {data.map((el) =>(<Link key={el.path} to={el.path}>{el.title}</Link>))}
    </div>
  )
}
export default Navbar