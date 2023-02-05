import React from 'react'
import {Container, Dropdown, FormControl, Navbar,Nav, Badge} from "react-bootstrap"
import { AiFillDelete } from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { CartState } from '../Context/Context'


const Header = () => {
    const {state:{cart},dispatch,productDispatch}=CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{ width: 500 }} placeholder="search a product " className="m-auto"
                    onChange={(e)=>productDispatch({
                        type:"FILTER_BY_SEARCH",
                        payload:e.target.value,
                    })
                    }
                />

            </Navbar.Text>
            <Nav>
                <Dropdown align="end">
                <Dropdown.Toggle variant='success'>
                    <FaShoppingCart color='white' fontSize="25px"/>
                    <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 270 }}>
                {cart.length>0?(
                    <>
                        {
                            cart.map((elements)=>(
                            <span className='cartitem' key={elements.id}>
                            <img 
                                   src={elements.image}
                                  className="cartItemImg"
                            alt={elements.name}/>
                            <div className='cartItemDetail'>
                            <span>{elements.name}</span>
                            <span>Rs {elements.price.split(".")[0]}</span>
                            </div>
                            <AiFillDelete 
                            fontSize="20px"
                            style={{cursor: "pointer"}}
                            onClick={()=>
                            dispatch({
                                type:"REMOVE_FROM_CART",
                                payload:elements
                            })
                            }/>
                          </span>
                            ))
                        }
                    </>
                ):(<span style={{ padding: 10 }}>Cart is Empty! </span>)}
                    
                </Dropdown.Menu>

                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
      
    
  )
}

export default Header
