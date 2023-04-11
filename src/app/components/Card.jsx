import React from 'react'
import Link from 'next/link'

function Card(props) {
  return (
    <div className='w-[100%] bg-slate-950 border-2 border-slate-700 shadow-[0_0_1rem_rgba(0, 0, 0, 0.1)] rounded-2xl overflow-hidden'>
        <div className=' bg-gradient-to-tr from-indigo-500 to-cyan-300 w-[100%] h-[12rem] bg-cover'></div>

        <div className=' mt-[-8rem] py-8 px-4 pt-0 flex items-center flex-col'>
            <div className=' relative w-[14rem] h-[14rem] rounded-[50%] overflow-hidden border-2 bg-white border-white shadow-[0_0_1rem_rgba(0, 0, 0, 0.2)]'>
                <img className=' w-full h-full object-cover' src={props.user.img}></img>
            </div>

            <h1 className=' text-center m-[1.5rem]'>
                <Link href={`./user/${props.user.id}`} className=' text-blue-500 block text-4xl font-semibold mb-4'>{`${props.user.nombre} ${props.user.apellido}`}</Link>
                <span className=' block text-lg font-normal mb-2 text-slate-200'>Productos: {props.user.producto}</span>
                <span className=' block text-lg font-normal mb-2 text-slate-200'>Turno: {props.user.turno}</span>
            </h1>

            <div className=' flex gap-4 mb-8'>
                <Link href={`./user/chat/${props.user.id}`} className=' inline-block uppercase text-blue-500 py-[8px] px-[24px] border-2 border-blue-500 text-[0.8rem] rounded-xl transition ease-linear hover:bg-blue-500 hover:text-white'>Mensaje</Link>
                <Link href={`./user/report/${props.user.id}`} className=' inline-block uppercase text-white py-[8px] px-[24px] border-2 border-blue-500 text-[0.8rem] rounded-xl bg-blue-500 transition ease-linear hover:bg-transparent hover:text-blue-500'>Reporte</Link>
            </div>
        </div>
    </div>
  )
}

export default Card