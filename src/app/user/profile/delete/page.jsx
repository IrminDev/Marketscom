
export default function deleteAcc(){
    return(
        <div className=" h-[100vh]">
            <div className=' bg-white w-[95%] px-8 py-12 translate-x-[-50%] translate-y-[-50%] absolute left-1/2 top-1/2'>
                <h1 className=' text-3xl text-center text-blue-500 mb-5'>Elimina tu perfil</h1>
                <p className=' relative m-auto w-full text-center text-slate-900 text-sm font-normal'>¿Deseas borrar tu cuenta de la plataforma? Puedes hacerlo desde aquí. Una vez eliminada tu cuenta se borrarán todos los datos asociados a ella, sé cuidadoso con está funcionalidad.</p>
                <form className=' w-full relative mt-7 mx-auto mb-0'>
                    <div className=' w-full grid grid-cols-form gap-y-5 gap-x-8 mb-5'>
                        <div>
                            <label htmlFor="contra" className=' text-blue-600 text-sm'>Contraseña</label>
                            <input className=' w-full font-normal py-2 px-3 border-[1.2px] border-slate-300 mt-1 focus:outline-none focus:border-blue-500' id="contra" type="password" name="contraseña" placeholder="Contraseña nueva" value=""/>
                        </div>
                        <div>
                            <label htmlFor="confirmarcontra" className=' text-blue-600 text-sm'>Confirma tu contraseña</label>
                            <input className=' w-full font-normal py-2 px-3 border-[1.2px] border-slate-300 mt-1 focus:outline-none focus:border-blue-500' id="confirmarcontra" type="password" name="contraseña" placeholder="Contraseña anterior" value=""/>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-form gap-y-5 gap-x-8 mb-5'>
                        <div>
                            <button className='bg-blue-500 font-semibold text-white rounded-md border-2 border-blue-500 py-3 px-5 transition ease-linear hover:bg-white hover:text-blue-500'>Eliminar perfil</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}