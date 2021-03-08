import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import arrow from '../static/images/arrow.svg'
import { ScrollTopOnMount } from '../components/ScrollToTopOnMount';

import external_link from '../static/images/external_link.png'

import twitter from '../static/images/twitter_profile.png'
import github from '../static/images/github_profile.png'
import facebook from '../static/images/facebook_profile.png'
import instagram from '../static/images/instagram_profile.png'

//SNSのリンクが登録されているかを判定する関数
const Judge = function(flag) {
  const alive = {
    opacity: 1,
  };
  const die = {
    opacity: 0.2,
  };
  if(flag){
    flag = alive;
  }else{
    flag = die;
  }

  return flag;
}


const Profile =(props)=>{
  let { id } = useParams()
  const mydetail = !!props.data.filter((item) => item.sys.id === id)
    ? props.data.filter((item) => item.sys.id === id)[0]
    : false
    
  const contents = mydetail ? (
      <>
        <h1 className="memberName">{mydetail.fields.name}</h1>

        
          <a href={mydetail.fields.portfolio}>
            <img className="profileImage" src={`${mydetail.fields.image.fields.file.url}`} />
          </a>

          {/* <div className="portfolioLink">
            <a href={mydetail.fields.portfolio}>ポートフォリオ<img src={external_link} /></a>
          </div> */}

          <p className="comment">{mydetail.fields.text}</p>
        
        <div className="snsLinks">
          <a href={mydetail.fields.twitter}><img className="snsIcon" style={new Judge(mydetail.fields.twitter)} src={twitter} alt=''/></a>
          <a href={mydetail.fields.github}><img className="snsIcon" style={new Judge(mydetail.fields.github)} src={github} alt=''/></a>
          <a href={mydetail.fields.facebook}><img className="snsIcon" style={new Judge(mydetail.fields.facebook)} src={facebook} alt=''/></a>
          <a href={mydetail.fields.instagram}><img className="snsIcon" style={new Judge(mydetail.fields.instagram)} src={instagram} alt=''/></a>
        </div>
      
      </>
  ):(<p>Nowloading...</p>)
  return(
    <>
    <ScrollTopOnMount/>
    <div className='container'>
      <h2 className="profileTitle">P<span>r</span>o<span>f</span>i<span>l</span>e</h2>
    <div className='profile'> 

    {/* <div onClick={() => console.log(props.data)}>clg</div> */}
    {contents}
    <Link to='/' className='toBlogs'><button type="button"><img src={arrow} alt=''/>トップページへ</button></Link>
    </div>
    </div>
    </>
  )
}

export default Profile