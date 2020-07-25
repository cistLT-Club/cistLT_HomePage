import React from 'react'
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom'

const BlogCard =(props)=>{
  return(
    <>
    <Link to={props.url}>
      <div className='blogCard'>
        <img src={props.data.fields.image.fields.file.url}/>
        <p>{props.data.fields.title}</p>
        <p>{props.data.fields.publishDate}</p>
      </div>
    </Link>
    </>
  )
}

export default BlogCard