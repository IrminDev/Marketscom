
export default function edit(){
    // Apartir de la sesion buscar el tipo de usuario
    const type = 'user';
    return(
        <div className=" h-[120vh] max-sm:h-[145vh]">
            <div className=' bg-slate-950 w-[95%] px-8 py-12 translate-x-[-50%] translate-y-[-50%] absolute left-1/2 top-1/2 mt-24 mb-24 max-md:mt-52 rounded-2xl border-2 border-slate-800'>
                <h1 className=' text-3xl text-center text-blue-500 mb-5'>Edita tu perfil</h1>
                <p className=' relative m-auto w-full text-center text-slate-300 text-sm font-normal'>¿Necesitas realizar algunas modificaiones? Realizalas aquí mismo. Si no buscas cambiar tu contraseña escribe la misma que ya tenías. Recuerda que si se detecta alguna irregularidad con tu información podrás ser eliminado de la plataforma.</p>
                <form className=' w-full relative mt-7 mx-auto mb-0'>
                    <div className=' w-full grid grid-cols-form gap-y-5 gap-x-8 mb-5'>
                        <div>
                            <label htmlFor="nombre" className=' text-blue-600 text-sm'>Nombre</label>
                            <input id="nombre" className=' bg-slate-900 text-slate-200 rounded-md w-full font-normal py-2 px-3 border-[1.2px] border-slate-500 mt-1 focus:outline-none focus:border-blue-500' type="text" name="nombre" placeholder="Nombre" defaultValue={''}/>
                        </div>

                        <div>
                            <label htmlFor="apellido" className=' text-blue-600 text-sm'>Apellido</label>
                            <input className=' bg-slate-900 text-slate-200 rounded-md w-full font-normal py-2 px-3 border-[1.2px] border-slate-500 mt-1 focus:outline-none focus:border-blue-500'  id="apellido" type="text" name="apellido" placeholder="Apellido" defaultValue={''}/>
                        </div>
                    </div>

                    <div className=' w-full grid grid-cols-form gap-y-5 gap-x-8 mb-5'>
                        <div>
                            <label htmlFor="correo" className=' text-blue-600 text-sm'>Correo</label>
                            <input className=' bg-slate-900 text-slate-200 rounded-md w-full font-normal py-2 px-3 border-[1.2px] border-slate-500 mt-1 focus:outline-none focus:border-blue-500'  id="correo" type="email" name="correo" placeholder="Correo" defaultValue={''}/>
                        </div>
                        <div>
                            <label htmlFor="foto" className=' text-blue-600 text-sm'>Foto de perfil</label>
                            <input className=' bg-slate-900 text-slate-200 rounded-md w-full font-normal py-2 px-3 border-[1.2px] border-slate-500 mt-1 focus:outline-none focus:border-blue-500'  id="foto" type="file" name="foto" placeholder="Foto de perfil" defaultValue={''}/>
                        </div>
                    </div>

                    
                    { type === 'user' ? (
                        <></>
                    ) : (
                        <>
                            <div className=' w-full grid grid-cols-form gap-y-5 gap-x-8 mb-5'>
                                <div>
                                    <label htmlFor="productos" className=' text-blue-600 text-sm'>Productos</label>
                                    <select className=' bg-slate-900 text-slate-200 rounded-md w-full font-normal py-2 px-3 border-[1.2px] border-slate-500 mt-1 focus:outline-none focus:border-blue-500'  id="productos" name='productos'>
                                        <optgroup label='Escoge un tipo de productos'>
                                            <option value="1">Comida</option>
                                            <option value="2">Dulces</option>
                                            <option value="3">Papelería</option>
                                            <option value="4">Accesorios</option>
                                            <option value="5">Libros</option>
                                            <option value="6">Electrónica</option>
                                            <option value="7">Otro</option>
                                        </optgroup>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="horario" className=' text-blue-600 text-sm'>Horario</label>
                                    <select className=' bg-slate-900 text-slate-200 rounded-md w-full font-normal py-2 px-3 border-[1.2px] border-slate-500 mt-1 focus:outline-none focus:border-blue-500'  id="horario" name='horario'>
                                        <optgroup label='Escoge un horario'>
                                            <option value="1">Matutino</option>
                                            <option value="2">Vespertino</option>
                                            <option value="3">Mixto</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                        </>
                    )
                    }

                    <div className=' w-full grid grid-cols-form gap-y-5 gap-x-8 mb-5'>
                        <div>
                            <label htmlFor="contranueva" className=' text-blue-600 text-sm'>Contraseña nueva</label>
                            <input className='bg-slate-900 text-slate-200 rounded-md w-full font-normal py-2 px-3 border-[1.2px] border-slate-500 mt-1 focus:outline-none focus:border-blue-500' id="contranueva" type="password" name="contraseña" placeholder="Contraseña nueva" defaultValue={''}/>
                        </div>
                        <div>
                            <label htmlFor="contra" className=' text-blue-600 text-sm'>Contraseña anterior</label>
                            <input className='bg-slate-900 text-slate-200 rounded-md w-full font-normal py-2 px-3 border-[1.2px] border-slate-500 mt-1 focus:outline-none focus:border-blue-500' id="contra" type="password" name="contraseña" placeholder="Contraseña anterior" defaultValue={''}/>
                        </div>
                    </div>

                    { type === 'user' ? (
                        <></>
                    ) : (
                        <>
                            <div className=' w-full grid grid-cols-form gap-y-5 gap-x-8 mb-5'>
                                <div>
                                    <label htmlFor="descripcion" className=' text-blue-600 text-sm'>Descripción</label>
                                    <textarea rows="6" className=' bg-slate-900 text-slate-200 rounded-md resize-none w-full font-normal py-2 px-3 border-[1.2px] border-slate-500 mt-1 focus:outline-none focus:border-blue-500' form="" id="descripcion" name="descripción" placeholder="Descripción" defaultValue={''}>

                                    </textarea>
                                </div>
                            </div>
                        </>
                    )}

                    <div className=' w-full grid grid-cols-form gap-y-5 gap-x-8 mb-5'>
                        <div>
                            <button className='bg-blue-500 font-semibold text-white rounded-md border-2 border-blue-500 py-3 px-5 transition ease-linear hover:bg-white hover:text-blue-500'>Realizar cambios</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}