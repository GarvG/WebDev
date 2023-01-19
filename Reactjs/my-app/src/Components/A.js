import React, { createContext } from 'react'
import B from './B'
 
const Firstname=createContext()
function A() {
  return (
    <div>
        <Firstname.Provider value="Garv">
         <B/>
        </Firstname.Provider>
    </div>
  )
}

export default A
export {Firstname};