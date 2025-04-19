import React from 'react'
import { PulseLoader } from 'react-spinners'
const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'90vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
       <PulseLoader />
    </div>
  )
}

export default LoaderComponent