import React from 'react'
import BlogCard from '../components/BlogCard'

const Blogs =(props)=>{
  return(
    <>
    <div className='container'id='blogGrid'>
    <div id="item1">Blogs</div>    
    <p className='blogs' id="item2">{props.data.length ? props.data.map((item,i)=>(
        <BlogCard data={item} key={i} url={`/blogs/${item.sys.id}`}/>
      )): 
        (<p>Now Loading...</p>)}
      </p>
      </div>
    </>
  )
}

export default Blogs