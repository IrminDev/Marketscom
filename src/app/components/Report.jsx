import React from 'react'

const Report = (props) => {
  return (
    <div className=' w-full flex flex-col border-b-2 border-slate-800 p-4'>
        <div className=' flex flex-row w-full justify-between'>
            <span className=' text-xl font-semibold text-slate-400'>Reportante: {props.report.boletaReportante}</span>
            <span className=' text-xl font-semibold text-slate-400'>Reportado: {props.report.boletaReportado}</span>
        </div>
        <div className=' w-full mt-5'>
            <span className=' text-2xl text-slate-200 font-semibold mb-2'>Descripción del reporte</span>
            <p className=' text-slate-400'>{props.report.descripcion}</p>
        </div>
    </div>
  )
}

export default Report