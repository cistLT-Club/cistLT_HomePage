import React from 'react'


const Members =(props)=>{
  return(
    <div className='container'>
    <div onClick={()=>console.log(props.data)}>clg</div>
    <p>{props.data.length ? props.data.map((item,i)=>(<p key='i' style={{color:"black"}}>{item.fields.name}</p>)):
    (<p>Now Loading...</p>)}
    </p>
    <h1>MEMBERS</h1>
    </div>
  )
}

export default Members