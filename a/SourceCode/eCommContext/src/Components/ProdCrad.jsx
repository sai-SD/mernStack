import React from 'react'
import { Link } from 'react-router-dom'

const ProdCrad = (el) => {
  return (
    <div style={{ width:"300px", border:"1px solid black", margin:"auto"}}>
        <img style={{width:"200px"}} src={el.image} alt={el.id} />
        <h1>{el.title}</h1>
        <p>{el.description}</p>
        <p>{el.price}</p>
        <p>{el.category}</p>
        <Link to={`/product/${el.id}`}>More Details</Link>
    </div>
  )
}

export default ProdCrad


// "id": "1",
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "rating": {
//   "rate": 3.9,
//   "count": 120
// }