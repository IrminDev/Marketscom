import React from 'react'
import { FaSearch } from 'react-icons/fa'
import MessagePrevAdmin from './MessagePrevAdmin'

const MessagesContAdmin = (props) => {
    const user = {
        id: 1,
        img: '/assets/user.svg',
        nombre: 'Juan',
        apellido: 'Perez',
        producto: 'Electronica',
        turno: 'Matutino',
    };
  return (
    <div className=' bg-slate-950 w-[450px] shadow-xl rounded-2xl'>
        <div className=' py-6 px-8'>
            <div className=' flex items-center pb-5 justify-between border-b-2 border-slate-700'>
                <div className=' flex items-center '>
                    <img className=' object-cover rounded-[50%] w-12 h-12' src={props.user.img}></img>
                    <div className=' text-slate-200 ml-4'>
                        <span className=' text-lg font-medium'>{`${props.user.nombre} ${props.user.apellido}`}</span>
                        <p>Activo</p>
                    </div>
                </div>
            </div>
            <div className=' my-5 flex items-center justify-between'>
                <div className=' flex w-full'>
                    <input className=' h-10 w-[91%] border-2 border-slate-600 px-3 text-base rounded-l-lg' type='text' placeholder='Buscar'></input>
                    <button className=' w-12 h-10 border-none text-white bg-blue-500 text-lg rounded-r-md flex items-center justify-center'><FaSearch className=" text-lg" /></button>
                </div>
            </div>
            <span className=' text-lg font-medium text-slate-300'>Selecciona un usuario para chatear.</span>
            <div className=' w-full max-h-[350px] overflow-auto scrollbar-none'>

                <MessagePrevAdmin user={user} />
                <MessagePrevAdmin user={user} />
                <MessagePrevAdmin user={user} />
                <MessagePrevAdmin user={user} />

            </div>
        </div>
    </div>
  )
}

export default MessagesContAdmin