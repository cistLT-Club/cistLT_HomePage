import React, { useEffect , useState }from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar =()=>{
  const [scroll , setScroll] = useState(0);
  useEffect(()=>{
    window.addEventListener('scroll', event => scrollTop(), true)
  },[]);
  //   window.addEventListener('scroll', event => Scrolls(282,605,"aboutSection"), true)
  //   window.addEventListener('scroll', event => Scrolls(605,1339,"membersSection"), true)
  //   window.addEventListener('scroll', event => Scrolls(1339,1339,"blogsSection"), true)
  //   window.addEventListener('scroll', event => Scrolls(1339,1339,"contactSection"), true)
    
  // },[]);
  // // スクロールいい感じ処理
  // const Scrolls=(aa,bb,ss)=>{
    const scrollTop = () => { 
      let x = Math.max(              
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop);
        setScroll(x);
    };
  let element
  //   scrollTop()
  if( scroll >= 0 && scroll < 288){
    element = document.getElementById('topSection')
    if(element){
      element.classList.add('active')
    }
  }else{
    element = document.getElementById('topSection')
    if(element){
      element.classList.remove('active')
    }
  }
  if( scroll >= 289 && scroll < 659){
    element = document.getElementById('aboutSection')
    if(element){
      element.classList.add('active')
    }
  }else{
    element = document.getElementById('aboutSection')
    if(element){
      element.classList.remove('active')
    }
  }
  if( scroll >= 659 && scroll < 1260){
    element = document.getElementById('membersSection')
    if(element){
      element.classList.add('active')
    }
  }else{
    element = document.getElementById('membersSection')
    if(element){
      element.classList.remove('active')
    }
  }
  if( scroll >= 1261 && scroll < 1370){
    element = document.getElementById('blogsSection')
    if(element){
      element.classList.add('active')
    }
  }else{
    element = document.getElementById('blogsSection')
    if(element){
      element.classList.remove('active')
    }
  }
  if( scroll >= 1370 && scroll < 1700){
    element = document.getElementById('contactSection')
    if(element){
      element.classList.add('active')
    }
  }else{
    element = document.getElementById('contactSection')
    if(element){
      element.classList.remove('active')
    }
  }
  
  
  return(
    <>
    <ul className="navbar">
    {/* <li style={{color:'white'}}>{scroll}</li> */}
      <li id='topSection'>
        <AnchorLink href="#top">
          <span>TOP</span>
        </AnchorLink>
      </li>
      <li id='aboutSection'>
        <AnchorLink href="#about">
          <span>ABOUT</span>
        </AnchorLink>
      </li>
      <li id='membersSection'>
        <AnchorLink href="#members">
          <span>MEMBERS</span>
        </AnchorLink>
      </li>
      <li id='blogsSection'>
        <AnchorLink href="#blogs">
          <span>BLOGS</span>
        </AnchorLink>
      </li>
      <li id='contactSection'>
        <AnchorLink href="#contact">
          <span>CONTACT</span>
        </AnchorLink>
      </li>
    </ul>
    </>
  )
}

export default Navbar


