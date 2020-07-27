import React from 'react'
import BlogCard from '../components/BlogCard'

const Blogs =(props)=>{
  return(
    <>
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