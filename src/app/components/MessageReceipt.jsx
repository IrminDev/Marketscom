import React from 'react'

const MessageReceipt = (props) => {
  return (
    <div className=' flex items-end mb-3'>
        <img className=' object-cover rounded-[50%] h-9 w-9' src={props.image} alt="user" />
        <div className=' ml-2 mr-auto max-w-[85%]'>
            <p className=' bg-slate-950 text-slate-300 rounded-r-lg rounded-t-lg p-2'>{props.message}</p>
        </div>
    </div>
  )
}

export default MessageReceipt