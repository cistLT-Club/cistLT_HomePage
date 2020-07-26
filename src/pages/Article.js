import React from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';

const Article =(props)=>{
  let { id } = useParams()
  const mydetail = !!props.data.filter((item) => item.sys.id === id)
    ? props.data.filter((item) => item.sys.id === id)[0]
    : false
  
  const contents = mydetail ? (
    <div className='container'>
      <div className='article'> 
        <img src={mydetail.fields.image.fields.file.url}/>
        <ReactMarkdown source={mydetail.fields.title} className='title'/>
        <ReactMarkdown source={mydetail.fields.publishDate} className='publishDate' />
        <ReactMarkdown source={mydetail.fields.author} className='publishDate' />
        <ReactMarkdown source={mydetail.fields.body} className='body'/>
      </div>
    </div>
  ):(<p>Nowloading...</p>)
  return(
    <>
    {/* <div onClick={()=>console.log(mydetail)}>clg</div> */}
    {contents}
    </>
  )
}

export default Article