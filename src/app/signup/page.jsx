import { FaUserAlt, FaLock } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdSettings, MdSchool } from "react-icons/md";
import Link from "next/link";

export default function signup(){
    return(
        <div className=" flex flex-col items-center w-[100%]">
            <h1 className=" text-4xl mb-10 text-blue-500">Registro</h1>
            <p className=" text-md w-[90%] mb-5 text-center">Crea una cuenta en la plataforma para acordar la venta y compra de productos. La información que registres deberá estar acorde con tus datos de estudiante.</p>
            <form className=" w-[100%] flex items-center justify-center flex-col px-[4rem]">
                <div className=" rounded-lg w-[100%] px-[0.4rem] bg-zinc-500 grid grid-cols-10 items-center py-2 mb-5">
                    <FaUserAlt className=" text-center text-neutral-700 text-lg " />
                    <input className=" col-span-9 text-neutral-800 placeholder:text-neutral-700 bg-zinc-500 outline-none border-none text-lg font-semibold" type="text" placeholder="Nombre" />
                </div>
                <div className=" rounded-lg w-[100%] px-[0.4rem] bg-zinc-500 grid grid-cols-10 items-center py-2 mb-5">
                    <FaUserAlt className=" text-center text-neutral-700 text-lg " />
                    <input className=" col-span-9 text-neutral-800 placeholder:text-neutral-700 bg-zinc-500 outline-none border-none text-lg font-semibold" type="text" placeholder="Apellido" />
                </div>
                <div className=" rounded-lg w-[100%] px-[0.4rem] bg-zinc-500 grid grid-cols-10 items-center py-2 mb-5">
                    <GrMail className=" text-center text-neutral-700 text-lg " />
                    <input className=" col-span-9 text-neutral-800 placeholder:text-neutral-700 bg-zinc-500 outline-none border-none text-lg font-semibold" type="mail" placeholder="Correo electrónico" />
                </div>
                <div className=" rounded-lg w-[100%] px-[0.4rem] bg-zinc-500 grid grid-cols-10 items-center py-2 mb-5">
                    <MdSchool className=" text-center text-neutral-700 text-lg " />
                    <input className=" col-span-9 text-neutral-800 placeholder:text-neutral-700 bg-zinc-500 outline-none border-none text-lg font-semibold" type="number" placeholder="Número de boleta" />
                </div>
                <div className=" rounded-lg w-[100%] px-[0.4rem] bg-zinc-500 grid grid-cols-10 items-center py-2 mb-5">
                    <FaLock className=" text-center text-neutral-700 text-lg " />
                    <input className=" col-span-9 text-neutral-800 placeholder:text-neutral-700 bg-zinc-500 outline-none border-none text-lg font-semibold" type="password" placeholder="Contraseña" />
                </div>
                <div className=" rounded-lg w-[100%] px-[0.4rem] bg-zinc-500 grid grid-cols-10 items-center py-2 mb-5">
                    <FaLock className=" text-center text-neutral-700 text-lg " />
                    <input className=" col-span-9 text-neutral-800 placeholder:text-neutral-700 bg-zinc-500 outline-none border-none text-lg font-semibold" type="password" placeholder="Confirmar contraseña" />
                </div>
                <div className="  w-[100%] flex grid-cols-2 items-center justify-between">
                    <div className=" w-[50%] col-span-1 px-[0.4rem] rounded-lg bg-zinc-500 grid grid-cols-10 items-center py-2 justify-around">
                        <MdSettings className=" col-span-2 text-center text-neutral-700 text-lg" />
                        <select placeholder="Tipo de usuario" className=" col-span-8 text-neutral-700 placeholder:text-neutral-700 bg-zinc-500 outline-none border-none text-lg">
                            <option value="1">Comprador</option>
                            <option value="2">Vendedor</option>
                        </select>
                    </div>
                    <button type="submit" className=" w-[45%] col-span-1 text-center bg-sky-700 rounded-xl py-2 ">Regístrate</button>
                </div>
            </form>
            <p className=" w-[80%] text-xs mt-3 text-blue-600 text-center"> Si se detecta alguna irregularidad con su información o en las actividades que está realizando dentro de marketscom usted acepta que puede ser eliminado de la plataforma.</p>
            <p className=" w-[90%] text-md text-center mt-5">¿Ya tienes una cuenta? <Link href={"../login"} className=" text-blue-500 font-semibold">Inicia sesión</Link></p>
        </div>
    )
}