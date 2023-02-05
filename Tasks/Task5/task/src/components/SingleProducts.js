import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../Context/Context'
import Rating from './Rating'

const SingleProducts = ({elements}) => {
   const{
    state:{cart},dispatch
} =CartState()
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={elements.image} alt={elements.name}></Card.Img>
        <Card.Body>
            <Card.Title>{elements.name}</Card.Title>
            <Card.Subtitle style={{ paddingBottom : 10 }}>

                <span>Rs {elements.price.split(".")[0]}</span>
                {elements.fastDelivery ? (<div>Fast Delivery</div>) : (<div> 4 Days Delivery </div>)}
                <Rating rating={elements.ratings}></Rating>

            </Card.Subtitle>
            {
                cart.some(p=>p.id===elements.id)?(<Button onClick={()=>{dispatch({type:'REMOVE_FROM_CART',payload:elements})}} variant='danger'>Remove From Cart</Button>) :
                (<Button onClick={()=>{
                    dispatch({type:'ADD_TO_CART',payload:elements})
                }}disabled={!elements.inStock}>{!elements.inStock?"Out of Stock" : "Add to Cart"}</Button>)
            }
            
            
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProducts
