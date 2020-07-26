import React from 'react'


const MembersCard =(props)=>{
  return(
    <>
    <div className='membersCard'>
      <img src={props.data.fields.image.fields.file.url}/>
      <p>{props.data.fields.name}</p>
    </div>
    </>
  )
}

export default MembersCard