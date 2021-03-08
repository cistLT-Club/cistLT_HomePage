import React from 'react'
import logo from '../static/images/logo.svg'
import {Link} from 'react-router-dom'

const Footer =()=>{
  return(
    <>
    <div className='footer'>
    <Link to=''><img src={logo} alt=''/></Link>
      <p>
        製作:Yoshiki-Yamada
          /saito
          /tanaka🤍
          /0yu
          /Takahashi
          /osamu
          /u-tan
      </p>
      

      <small>©️2020-2021 CIST-LTサークル</small>
    </div>

    </>
  )
}

export default Footer