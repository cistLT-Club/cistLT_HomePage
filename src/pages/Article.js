import React from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';

const Article =(props)=>{
  let { id } = useParams()
  const mydetail = !!props.data.filter((item) => item.sys.id === id)
    ? props.data.filter((item) => item.sys.id === id)[0]
    : false
  return(
    <>
    <div>Articleã� ã‚ˆ</div>
    <div onClick={()=>console.log(mydetail)}>clg</div>
    {mydetail ? <ReactMarkdown source={mydetail.fields.body} /> : <p>loading</p>}
    </>
  )
}

export default Article