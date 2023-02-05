import React from 'react'
import { CartState } from '../Context/Context'
import Filters from './Filters';
import SingleProducts from './SingleProducts';
import "./styles.css"

const Home = () => {
    const {state:{products},
    productstate:{byStock,byFastDelivery,byRating,sort,searchQuery}
}=CartState()



    const TProducts=()=>{
      let sortedProducts=products
      if(sort){
        sortedProducts=sortedProducts.sort((a,b)=>
            sort==='lowtoHigh'?a.price-b.price:b.price-a.price
        )
        }
        if(!byStock){
            sortedProducts=sortedProducts.filter((products)=>products.inStock)
        }
        if(byFastDelivery){
            sortedProducts=sortedProducts.filter((products)=>products.fastDelivery)
        }
        if(byRating){
            sortedProducts=sortedProducts.filter((products)=>products.ratings>=byRating)
        }
        if(searchQuery){
            sortedProducts=sortedProducts.Filter((products)=>products.name.toLowerCase().includes(searchQuery))
        }
        return sortedProducts
      }
    

    console.log(products);
  return (
    <div className='home'>
      <Filters/>
       <div className='productContainer'>
        {TProducts().map((elements)=>{
            return <SingleProducts elements={elements} key={elements.id}/>
        })
        
        }
       </div>
    </div>
  )
}

export default Home
