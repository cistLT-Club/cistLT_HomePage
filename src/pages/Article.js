import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import arrow from '../static/images/arrow.svg'
import { ScrollTopOnMount } from '../components/ScrollToTopOnMount';
import { 
  TwitterShareButton, 
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share'



const Article =(props)=>{
  const location = useLocation();  //urlを取得
  let tag = ['cistLT','Blog']
  let { id } = useParams()
  const mydetail = !!props.data.filter((item) => item.sys.id === id)
    ? props.data.filter((item) => item.sys.id === id)[0]
    : false
  
  const contents = mydetail ? (
      <>
        <img src={`${mydetail.fields.image.fields.file.url}?&w=200&h=200`}/>
        <ReactMarkdown source={mydetail.fields.title} className='title'/>
        <ReactMarkdown source={mydetail.fields.publishDate} className='publishDate' />
        <ReactMarkdown source={mydetail.fields.author} className='publishDate' />
        <ReactMarkdown source={mydetail.fields.body} className='body'/>
        {/* 共有リンク */}
        <TwitterShareButton url={"https://cist-lt-group.web.app"+location.pathname} title={mydetail.fields.title} hashtags={tag}>
                  <TwitterIcon size={40} round />
        </TwitterShareButton>
        <FacebookShareButton url={"https://cist-lt-group.web.app"+location.pathname} title={mydetail.fields.title} >
                  <FacebookIcon size={40} round />
        </FacebookShareButton>
      </>
  ):(<p>Nowloading...</p>)
  return(
    <>
    <ScrollTopOnMount/>
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