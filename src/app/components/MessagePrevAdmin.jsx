import React from 'react'
import Link from 'next/link'

const MessagePrevAdmin = (props) => {
    return (
        <Link className=' flex items-center w-full justify-between rounded-lg mt-3 pr-4 bg-slate-900 border-2 border-slate-800' href={`./admin/chat/${props.user.id}`}>
            <div className=' flex items-center p-4'>
                <img className=' object-cover rounded-[50%] h-12 w-12' src={props.user.img}></img>
                <div className=' text-slate-200 ml-4'>
                    <span className=' text-lg font-medium'>{`${props.user.nombre} ${props.user.apellido}`}</span>
                    <p className=' text-sm text-slate-300'>INSERTE EL MENSAJE OBTENIDO DEL FETCH</p>
                </div>
            </div>
        </Link>
      )
}

export default MessagePrevAdmin