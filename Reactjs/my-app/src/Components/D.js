import React, { useContext } from 'react'
import { Firstname } from './A'


function D() {
    const firstname=useContext(Firstname);
  return (
    <div>
        {firstname};
    </div>
  )
}

export default D