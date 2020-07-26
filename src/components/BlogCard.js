import React from 'react'
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom'

const BlogCard =(props)=>{
  return(
    <>
    <Link to={props.url} className='blogCard'>
      
        <img src={props.data.fields.image.fields.file.url}/>
        <h3>{props.data.fields.title}</h3>
        <p>{props.data.fields.publishDate}</p>
     
    </Link>
    </>
  )
}

export default BlogCard