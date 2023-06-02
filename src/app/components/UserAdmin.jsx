import React from 'react'
import Link from 'next/link'

function userAdmin(props) {
    return (
      <div class="flex justify-between py-5 w-full px-5 border-b-2 border-slate-800">
        <div class="flex gap-x-4">
          <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={`${props.user.img}`} alt={`${props.user.id}`}/>
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-500">{`${props.user.nombre} ${props.user.apellido}`}</p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">{`${props.user.boleta}`}</p>
          </div>
        </div>
        <div className='hidden sm:flex sm:flex-row sm:items-center'>
          <Link className=' text-slate-300 transition-all ease-linear hover:text-blue-600 font-semibold' href={`./admin/reportes/${props.user.id}`}>Reportes</Link>
        </div>
        <div className='hidden sm:flex sm:flex-row sm:items-center'>
          {props.user.estado === 'Reportado' ? (
            <>
              <div className=' rounded-full w-2 h-2 bg-orange-600 mr-2'/><p class="text-sm leading-5 text-gray-500">Reportado</p>
            </>           
          ) : props.user.estado === 'Baneado' ? (
            <>
              <div className=' rounded-full w-2 h-2 bg-red-600 mr-2'/><p class="text-sm leading-5 text-gray-500">Lista negra</p>
            </>
          ) : (
            <>
              <div className=' rounded-full w-2 h-2 bg-green-600 mr-2'/><p class="text-sm leading-5 text-gray-500">Sin incidencias</p>
            </>
          )}

        </div>
      </div>
    )
  }
    
    export default userAdmin;