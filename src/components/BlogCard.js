import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard =(props)=>{
  return(
    <>
    <Link to={props.url} className='blogCard'>
      
        <img src={`${props.data.fields.image.fields.file.url}?fm=webp&w=250&h=250`}/>
        <h3>{props.data.fields.title}</h3>
        <p>{props.data.fields.publishDate}</p>
     
    </Link>
    </>
  )
}

export default BlogCard