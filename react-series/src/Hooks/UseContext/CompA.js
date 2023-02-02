import React, { createContext } from 'react'
import CompB from './CompB'

const Biodata=createContext()

const CompA = () => {
  return (
  <>
    <Biodata.Provider value={"GarG Sir!!"}>
    <CompB />
    </Biodata.Provider>
    <CompB />
  </>
  )
}

export  default CompA;
export {Biodata}
