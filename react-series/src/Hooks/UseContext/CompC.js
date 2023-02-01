import React, { useContext } from 'react'
import { Biodata } from './CompA'
const CompC = ({name}) => {
    const value=useContext(Biodata)
  return (
    <div>
      Hello from CompC {value}
     </div>
  )
}

export default CompC
