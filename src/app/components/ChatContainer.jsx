import React from 'react'
import Link from 'next/link'
import { FaPaperPlane, FaArrowLeft } from 'react-icons/fa'
import MessageReceipt from './MessageReceipt'
import MessageSend from './MessageSend'

const ChatContainer = (props) => {
  // Recibe como parametros user (usuario al que se le manda el mensaje) y userMain (usuario logueado)
  // SE MODIFICARA A SOLO TOMAR LOS IDs Y HACER EL FECTH DESDE EL COMPONENTE
  return (
    <div className=' bg-slate-950 w-[450px] border-2 border-slate-800 shadow-xl rounded-2xl'>
        <div>
          <div className=' flex items-center py-4 px-8'>
            <Link className=' text-slate-300 text-lg mr-4' href='./user/chat'><FaArrowLeft/></Link>
            <img className=' object-cover rounded-[50%] h-9 w-9 mr-2' src={props.user.img}></img>
            <div className=''>
              <span className=' text-xl font-medium'>{`${props.user.nombre} ${props.user.apellido}`}</span>
            </div>
          </div>

          <div className=' h-[500px] overflow-y-auto scrollbar-none bg-slate-900 py-4 px-7 shadow-2xl'>

              <MessageReceipt image={props.user.img} message='Hola, como estas?' />
              <MessageSend message='Bien, y vos?' />
              <MessageReceipt image={props.user.img} message='Como siempre todo bien, un gusto que es hablar contigo' />

          </div>

          <form action="" className=' py-4 px-7 flex justify-between'>
            <input className=' h-11 w-[92%] text-lg border-2 border-slate-800 rounded-l-md' type="text" autoComplete='off' />
            <button className=' w-12 border-none text-slate-200 bg-blue-500 rounded-r-md flex items-center justify-center'><FaPaperPlane /></button>
          </form>
        </div>
    </div>
  )
}

export default ChatContainer