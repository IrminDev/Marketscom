'use client'
import Link from 'next/link'

export default function signup(){
    return(
        <>
            <div className=' text-slate-400 mt-[3rem]'>
                <div className=' bg-gradient-to-r from-blue-500 to-cyan-600 bg-cover w-[100%] flex h-[230px] relative shadow-[0px_3px_4px_rgba(0, 0, 0, .2)] max-sm:h-1/2 max-md:flex max-md:h-3/5 max-md:flex-col-reverse max-md:text-center max-md:pb-5'>
                    <div className=' float-left w-[340px] h-[200px] max-md:w-full max-md:h-52 max-md:flex max-md:justify-center'>
                        <img src="/assets/user.svg" className=' rounded-[50%] h-[230px] w-[230px] max-md:h-[280px] max-md:w-[280px] border-4 border-white absolute left-[50px] top-[80px] bg-white shadow-[0px_5px_10px_rgba(0, 0, 0, .2)] max-md:left-0 max-md:relative' onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src="/assets/user.svg";}}></img>
                    </div>
                    <div className=' flex float-right justify-center items-center max-md:pt-10'>
                        <h3 className=' text-7xl text-white'>Irmin Jimenez</h3>
                    </div>
                </div>
                <div className=' w-[100%] flex pr-[15px] max-md:pr-0 max-md:flex-col'>
                    <div className=' max-md:flex max-md:justify-center max-md:-z-10'>
                        <div className=' w-[300px] rounded-md border-2 border-slate-700 bg-[#122757] shadow-[0_3px_5px_rgba(0, 0, 0, .2)] pt-[80px] pb-[20px] px-[30px] ml-[10px] z-10 max-md:w-4/5 max-md:h-full max-md:pt-36'>
                            <p className=' mb-[10px] text-xl text-slate-300 max-md:text-center'>2023630297</p>
                            <p className=' mb-[10px] text-xl text-slate-300 max-md:text-center'>irminlml@gmail.com</p>
                            <div className=' flex flex-col'>
                                <Link className=' font-semibold text-center border-2 border-blue-500 p-[10px] w-full cursor-pointer rounded-sm bg-blue-500 text-lg my-5 mx-2 mb-[40px] transition ease-linear text-slate-200 hover:bg-slate-200 hover:text-blue-500' href={'/user/chat'}>
                                    Chat
                                </Link>
                                <Link className=' font-semibold text-center border-2 border-blue-500 p-[10px] w-full cursor-pointer rounded-sm bg-blue-500 text-lg my-5 mx-2 mb-[40px] transition ease-linear text-slate-200 hover:bg-slate-200 hover:text-blue-500' href={'/user/chat'}>
                                    Cerrar sesión
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full'>
                        <div className=' w-full '>
                            <ul className=' flex justify-center h-[40px] bg-slate-800'>
                                <li className=' p-[10px] w-full border-b-4 pb-2 border-blue-500 text-slate-200 text-center shadow-md'>Informacion</li>
                            </ul>
                        </div>
                        <div className=' w-full bg-slate-900 p-3 rounded-md border-2 border-slate-700 mb-10'>
                            <div className=' flex flex-col'>
                                <h1 className=' mb-[30px] text-slate-200 text-center font-bold text-2xl'>Descripción</h1>
                                <p className=' text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae saepe molestias vel qui laboriosam omnis! Aliquid iure impedit possimus obcaecati tempora eius atque, saepe fugit inventore soluta laudantium, neque explicabo. </p>
                                <h1 className=' mb-[30px] text-slate-200 text-center font-bold text-2xl'>Opciones</h1>
                                <div className=' flex flex-col items-center justify-around'>
                                    <Link className=' text-center border-2 border-blue-500 p-[10px] w-[90%] cursor-pointer rounded-md bg-blue-500 text-xl mx-1 my-2 mb-10 transition ease-linear shadow-md text-white hover:text-blue-500 hover:bg-white' href={'./user/profile/delete'}>Eliminar cuenta</Link>
                                    <Link className=' text-center border-2 border-blue-500 p-[10px] w-[90%] cursor-pointer rounded-md bg-blue-500 text-xl mx-1 my-2 mb-10 transition ease-linear shadow-md text-white hover:text-blue-500 hover:bg-white' href={'./user/profile/edit'}>Configuración</Link>
                                    <Link className=' text-center border-2 border-blue-500 p-[10px] w-[90%] cursor-pointer rounded-md bg-blue-500 text-xl mx-1 my-2 mb-10 transition ease-linear shadow-md text-white hover:text-blue-500 hover:bg-white' href={'./'}>Cerrar sesión</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}