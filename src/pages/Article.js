import React from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import arrow from '../static/images/arrow.svg'

const Article =(props)=>{
  let { id } = useParams()
  const mydetail = !!props.data.filter((item) => item.sys.id === id)
    ? props.data.filter((item) => item.sys.id === id)[0]
    : false
  
  const contents = mydetail ? (
      <>
        <img src={mydetail.fields.image.fields.file.url}/>
        <ReactMarkdown source={mydetail.fields.title} className='title'/>
        <ReactMarkdown source={mydetail.fields.publishDate} className='publishDate' />
        <ReactMarkdown source={mydetail.fields.author} className='publishDate' />
        <ReactMarkdown source={mydetail.fields.body} className='body'/>
      </>
  ):(<p>Nowloading...</p>)
  return(
    <>
    <div className='container'>
    <div className='article'> 
    <Link to='/blogs' className='toBlogs'><button type="button"><img src={arrow} alt=''/>記事一覧へ</button></Link>
    {/* <div onClick={()=>console.log(mydetail)}>clg</div> */}
    {contents}
    </div>
    </div>
    </>
  )
}

export default Article