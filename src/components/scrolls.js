import React ,{ useState }from 'react'

const Scroll =(aa,bb,ss)=>{
  // let aa = aa;
  // let bb = bb;
  // let ss = ss;
  const [scroll , setScroll] = useState(0);
  const scrollTop = () => { 
    let x = Math.max(              
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop);
      setScroll(x);
  };
  let element = document.getElementById(ss)
  scrollTop()
  if( scroll >= aa && scroll < bb){
    element.classList.add('active')
  }else{
    if(element){
    element.classList.remove('active')
    }
  }
}


export default Scroll

