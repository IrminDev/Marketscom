import Link from 'next/link';
import React from 'react'
import Report from '../../../components/Report'

//Realizar el fetch de datos para el usuario a partir del id del usuario
//Realizar el mapeo de los reportes del usuario a partir del id
export default function profile({ params }){
  const {id} = params;

  const user1 = {
      id: 1,
      img: '/assets/user.svg',
      nombre: 'Juan',
      apellido: 'Perez',
      producto: 'Electronica',
      turno: 'Matutino',
      boleta: '2020630492',
      descripcion: 'Esta es mi descripcion de usuario',
      type: 'seller',
      correo: 'irmin@gmail.com',
  };

  const report1 = {
    id: 1,
    boletaReportante: '2020630492',
    boletaReportado: '2020630248',
    descripcion: 'Este usuario fue reportado por x motivos. Se le notifica a los administradores para que tomen y medidas',
};

  return (
    <div className=' flex flex-col items-center justify-center'>
      <div className=' mt-24 flex flex-row items-center justify-center w-[95%] max-sm:flex-col'>
        <div className=''>
          <img src={user1.img} alt={id} className=' rounded-full border-white border-2 w-64 h-64' />
        </div>
        <div className=' flex flex-col items-center'>
          <span className=' ml-5 text-slate-200 font-semibold text-4xl'>{`${user1.nombre} ${user1.apellido}`}</span>
          <span className=' font-extralight text-slate-400 mt-2'>{user1.boleta}</span>
        </div>
        <div className=' w-[30%] flex flex-row-reverse max-sm:w-full max-sm:justify-center max-sm:mt-3'>
          <Link className=' rounded-md border-blue-500 border-2 p-4 font-semibold text-blue-500 transition-all ease-linear hover:bg-blue-500 hover:text-white ' href={`../chat/${user1.id}`}>Mensaje</Link>
        </div>
      </div>
      <div className=' w-[90%] bg-slate-950 rounded-md border-slate-800 border-2 mt-8 max-sm:mb-20'>
        <Report report={report1} />
        <Report report={report1} />
        <Report report={report1} />
      </div>
    </div>
  )
}
