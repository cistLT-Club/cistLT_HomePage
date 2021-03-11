import React, { useEffect } from 'react'



export const ScrollTopOnMount = () =>{
  
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return(  
    null
  )
}
