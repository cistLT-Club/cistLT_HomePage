import React from 'react'
import BlogCard from '../components/BlogCard'
import { ScrollTopOnMount } from '../components/ScrollToTopOnMount'

const Blogs =(props)=>{
  return(
    <>
    <ScrollTopOnMount/>
    <div className='container BlogContainer'>
      
    <h2>B<span>L</span>O<span>G</span>S</h2>
    <p className='blogsGrid'>{props.data.length ? props.data.map((item,i)=>(
        <BlogCard data={item} key={i} url={`/blogs/${item.sys.id}`}/>
      )): 
        (<p>Now Loading...</p>)}
      </p>
      </div>
    </>
  )
}

export default Blogs