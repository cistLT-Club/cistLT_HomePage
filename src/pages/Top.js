import React from 'react'
import BlogCard from '../components/BlogCard';
import logo from '../static/images/logo.svg'
import yamada from '../static/images/yamada.png'
import saito from '../static/images/saito.png';
import twitter from '../static/images/twitter.png'
import mail from '../static/images/mail.png'
import github from '../static/images/github.png'


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
    <div className='topContainer'>
      <img src={logo} alt=''/>
      <div className='about'>
        <h2><span>A</span>BO<span>U</span>T</h2>
        <p>
          IT技術系の勉強をしています！初心者大歓迎です！所属メンバーはバイオ系や電子工学系、情報工学系と様々めんばーで構成されています！！みんなで興味のあることを勉強してアウトプットしていくおｋとを目標としています！一人で悩まないで！一緒に技術力を高めませんか？？
        </p>
      </div>
      <div className='members'>
        <h2>MEM<span>B</span>ER<span>S</span></h2>
        <div>
          <p>Yoshiki-Yamada</p>
          <img src={yamada} />
        </div>

        <div>
          <p>Saito</p>
          <img src={saito} />
        </div>
        
      </div>
      <div className='newBlog'>
        <h2>B<span>L</span>O<span>G</span>S</h2>
        <div className='blogContainer'>
        {bloglist}
        {bloglist2}</div>
        
      </div>
      <div className='contact'>
        <h2>CO<span>N</span>TA<span>C</span>T</h2>
        <a href='https://twitter.com/CistLt'><img src={twitter} /></a>
        <a href='https://twitter.com/CistLt'><img src={mail} /></a>
        <a href='https://twitter.com/CistLt'><img src={github} /></a>
      </div>
    </div>
    </>
  )

}
        
export default Top        
