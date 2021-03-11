import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../static/images/arrow.svg'

const NotFound =()=>{

  return(
    <>
        <div className="container">
                <h2 className="notFound">4<span>0</span>4<span>Not</span>Fou<span>nd</span></h2>
                <div className="top">
                <Link to='/' className='toTop'><button type="button"><img src={arrow} alt=''/>TOPページへ</button></Link>
                </div>
        </div>

    </>
  )
}

export default NotFound