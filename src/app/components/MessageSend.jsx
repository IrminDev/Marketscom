import React from 'react'

const MessageSend = (props) => {
  return (
    <div className=' flex items-center mb-3'>
        <div className=' ml-auto max-w-[85%]'>
            <p className=' bg-slate-700 text-slate-200 rounded-l-lg rounded-t-lg p-2'>{props.message}</p>
        </div>
    </div>
  )
}

export default MessageSend