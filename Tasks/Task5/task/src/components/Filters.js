import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartState } from '../Context/Context';
import Rating from './Rating';


const Filters = () => {
    // 
    const{productstate:{ byStock ,byFastDelivery,byRating,sort},productdispatch}=CartState()
    
  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span>
        <Form.Check
        inline
        label="Ascending"
        name="group1"
        type="radio"
        id={`inline-1`}
        onChange={()=>{
            productdispatch({
                type:"SORT_BY_PRICE",
                payload:"lowtoHigh"
            })
        }}
        checked={sort === "lowtoHigh"? true: false}
        />

      </span>
      <span>
        <Form.Check
        inline
        label="Descending"
        name="group1"
        type="radio"
        id={`inline-2`}
        onChange={()=>{
            productdispatch({
                type:"SORT_BY_PRICE",
                payload:"hightoLow"
            })
        }}
        checked={sort=== "hightoLow"? true: false}
    
        />
        
      </span>
      <span>
        <Form.Check
        inline
        label="Include out of Stock"
        name="group1"
        type="checkbox"
        id={`inline-3`}
        onChange={()=>{
            productdispatch({
                type:"FILTER_BY_STOCK",
               
            })
        }}
        checked={byStock}

        />
      </span>
      <span>
        <Form.Check
        inline
        label="Fast Delivery Only"
        name="group1"
        type="checkbox"
        id={`inline-4`}
        onChange={()=>{
            productdispatch({
                type:"FILTER_BY_DELIVERY",
               
            })
        }}
        checked={byFastDelivery}
        />
        
      </span>
      <span>
        <label style={{paddingRight:10}}>Ratings:</label>
        <Rating rating={byRating} onClick={(i)=>productdispatch({type:"FILTER_BY_RATING",payload:i+1})}style={{cursor:"pointer"}}/>
      </span>
      <Button variant="light" onClick={()=>productdispatch({
        type:"ClEAR_FILTERS"
      })}>Clear Filters</Button>
    </div>
  )
}

export default Filters
