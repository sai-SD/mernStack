import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, Image, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'

const ProdCrad = (el) => {
  return (
    <div style={{ width:"300px", border:"1px solid black", margin:"auto"}}>
        {/* <img style={{width:"200px"}} src={el.image} alt={el.id} />
        <h1>{el.title}</h1>
        <p>{el.description}</p>
        <p>{el.price}</p>
        <p>{el.category}</p>
        <Link to={`/product/${el.id}`}>More Details</Link> */}
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={el.image}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{el.title}</Heading>
      <Text>
        {el.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Rs.{el.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
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