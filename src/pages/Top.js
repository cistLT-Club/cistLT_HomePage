import React from 'react'
import BlogCard from '../components/BlogCard';

const Top =(props)=>{
  return(
    <>
      
      <div className='top'>Top</div>
      <div onClick={()=>console.log(props.data)}>clg</div>
        
        <p>{props.data.length ? props.data.map((item,i)=>(
          <BlogCard data={item} key={i}/>
        )): 
          (<p>Now Loading...</p>)}
        </p>
    </>
  )
}

export default Top