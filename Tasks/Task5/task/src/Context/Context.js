import React, { createContext, useContext, useReducer } from 'react'
import {faker} from "@faker-js/faker";
import { cartReducer, productReducer } from './Reducer';

const Cart=createContext();
faker.seed(99);
const Context = ({children}) => {

  const products=[...Array(20)].map((key)=>({
     id:faker.datatype.uuid(),
     name:faker.commerce.productName(),
     price: faker.commerce.price(),
    image:faker.image.image(),
      inStock:faker.helpers.arrayElement([0,10,100,90]),
     fastDelivery: faker.datatype.boolean(),
      ratings:faker.helpers.arrayElement([1,2,3,4,5]),

  }));
   
console.log(products)
   
   const [state, dispatch] = useReducer(cartReducer,{

    products:products,
    cart:[]
   });

   const [productstate,productdispatch]=useReducer(productReducer,{
   byStock:false,
   byFastDelivery:false,
   byRating:0,
   searchQuery:"", 
   });
   
  return (
   <Cart.Provider value={{state,dispatch,productstate,productdispatch}}>
     {children}
   </Cart.Provider>
  )
}

export default Context
export const CartState=()=>{
  return useContext(Cart);
}