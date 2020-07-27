import React from 'react'
import BlogCard from '../components/BlogCard';
import logo from '../static/images/logo.svg'
import twitter from '../static/images/twitter.png'
import mail from '../static/images/mail.png'
import github from '../static/images/github.png'
import MembersCard from '../components/MembersCard'
import { Link } from 'react-router-dom';
import energy from '../static/images/energy.svg'
import Navbar from '../components/Navbar'

const Top =(props)=>{
  let bloglist = ''
  let bloglist2 = []
  if (props.data.length && props.data.length <= 4) {
    bloglist = props.data.map((item,i) => (
      <div key={item.sys.id}>
        <BlogCard data={item} key={i} url={`/blogs/${item.sys.id}`}/>
      </div>
    ))
  } else if (props.data.length) {
    for (let i = 0; i < 4; i++) {
      bloglist2.push(
        <BlogCard data={props.data[i]} key={i} url={`/blogs/${props.data[i].sys.id}`}/>
      )
    }
  } else {
    bloglist = <p>loading...</p>
  }
  return(
  <>
    <div id="top" className='topContainer container'>
    <Navbar/>

      <img src={logo} alt=''/>
      <div id="about" className='about'>
        <h2><span>A</span>BO<span>U</span>T</h2>
        <p>
          IT技術系の勉強をしています！初心者大歓迎です！所属メンバーはバイオ系、電子工学系、情報工学系と様々なメンバーで構成されています！！みんなで興味のあることを勉強し、アウトプットすることを目標にしています！一人で悩まないで！一緒に技術力を高めませんか？？
        </p>
      </div>
      <div id="members">
      <h2>ME<span>MB</span>E<span>R</span>S</h2>
      <div  className='members'>
      {props.data2.length ? props.data2.map((item,i)=>(<MembersCard data={item}/>)):
      (<p>Now Loading...</p>)}
      </div>
      </div>

      <div id="blogs" className='newBlog'>
        <h2>B<span>L</span>O<span>G</span>S</h2>
        <p className='desc'>サークルのメンバーがブログを更新しています。</p>
        <div className='blogContainer'>
        {bloglist}
        {bloglist2}
        </div>
        <Link to='/blogs' className='moreButton'>
          <p><img src={energy} />MORE...</p> 
        </Link>
      </div> 

      <div id="contact" className='contact'>
        <h2>CO<span>N</span>TA<span>C</span>T</h2>
      </div>

        <div className='iconFlex'>
          <a href='https://twitter.com/CistLt'><img src={twitter} alt=''/></a>
          <a href="mailto:cist-lt@googlegroups.com"><img src={mail} alt=''/></a>
          <a href='https://twitter.com/CistLt'><img src={github} alt=''/></a>
        </div>

    </div>
  </>
  )  
}
export default Top