import { FaLock } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Link from "next/link";

export default function singin(){
    return(
        <div>
            <div className=" flex flex-col items-center w-[100%]">
            <h1 className=" text-4xl mb-10 text-blue-500">Inicio de sesión</h1>
            <p className=" text-md w-[90%] mb-5 text-center">Inicia sesión con tus credenciales para retomar tus actividades de compra/venta.</p>
            <form className=" w-[100%] flex items-center justify-center flex-col px-[4rem]">
                <div className=" rounded-lg w-[100%] px-[0.4rem] bg-zinc-500 grid grid-cols-10 items-center py-2 mb-5">
                    <GrMail className=" text-center text-neutral-700 text-lg " />
                    <input className=" col-span-9 text-neutral-800 placeholder:text-neutral-700 bg-zinc-500 outline-none border-none text-lg font-semibold" type="mail" placeholder="Correo electrónico" />
                </div>
                <div className=" rounded-lg w-[100%] px-[0.4rem] bg-zinc-500 grid grid-cols-10 items-center py-2 mb-5">
                    <FaLock className=" text-center text-neutral-700 text-lg " />
                    <input className=" col-span-9 text-neutral-800 placeholder:text-neutral-700 bg-zinc-500 outline-none border-none text-lg font-semibold" type="password" placeholder="Contraseña" />
                </div>
                <div className="  w-[100%] flex items-center justify-around">
                    <button type="submit" className=" w-[60%] col-span-2 text-center bg-sky-700 rounded-xl py-2 ">Iniciar sesión</button>
                </div>
            </form>
            <p className=" w-[90%] text-md text-center mt-5">¿Aún no tienes una cuenta? <Link href={"../signup"} className=" text-blue-500 font-semibold">Regístrate</Link></p>
        </div>
        </div>
    )
}