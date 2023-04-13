export default function report({ params }){
    const {id} = params;

    return(
        <div className=" h-[100vh]">
            <div className=' rounded-2xl border-2 border-slate-800 bg-slate-950 w-[95%] px-8 py-12 translate-x-[-50%] translate-y-[-50%] absolute left-1/2 top-1/2'>
                <h1 className=' text-3xl text-center text-blue-500 mb-5'>Reportar a NOMBRE</h1>
                <p className=' relative m-auto w-full text-center text-slate-200 text-sm font-normal'>Si has notado algún comportamiento que esté contra las reglas podrás reportar dicha situación desde aquí. Todo abuso será penalizado.</p>
                <form className=' w-full relative mt-7 mx-auto mb-0'>
                    <div className=' w-full grid grid-cols-form gap-y-5 gap-x-8 mb-5'>
                        <div>
                            <label htmlFor="boletarem" className=' text-blue-600 text-sm'>Boleta del reportante</label>
                            <input id="boletarem" className='bg-slate-900 text-slate-200 rounded-md w-full font-normal py-2 px-3 border-[1.2px] border-slate-300 mt-1 focus:outline-none focus:border-blue-500' type="number" name="boletarem" placeholder="Boleta" defaultValue={''}/>
                        </div>

                        <div>
                            <label htmlFor="boletades" className=' text-blue-600 text-sm'>Boleta del reportado</label>
                            <input className='bg-slate-900 text-slate-200 rounded-md w-full font-normal py-2 px-3 border-[1.2px] border-slate-300 mt-1 focus:outline-none focus:border-blue-500'  id="boletades" type="number" name="boletades" placeholder="Boleta" defaultValue={''}/>
                        </div>
                    </div>

                    <div className=' w-full grid grid-cols-form gap-y-5 gap-x-8 mb-5'>
                        <div>
                            <label htmlFor="descripcion" className=' text-blue-600 text-sm'>Descripción</label>
                            <textarea rows="6" className='bg-slate-900 text-slate-200 rounded-md resize-none w-full font-normal py-2 px-3 border-[1.2px] border-slate-300 mt-1 focus:outline-none focus:border-blue-500' form="" id="descripcion" name="descripción" placeholder="Escribe aquí los motivos por los que realizas este reporte." defaultValue={''}>

                            </textarea>
                        </div>
                    </div>

                    <div className=' w-full grid grid-cols-form gap-y-5 gap-x-8 mb-5'>
                        <div>
                            <button className='bg-blue-500 font-semibold text-white rounded-md border-2 border-blue-500 py-3 px-5 transition ease-linear hover:bg-white hover:text-blue-500'>Enviar reporte</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}