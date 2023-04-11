import { FaUserAlt, FaLock, FaCalendar } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdInsertPhoto, MdSell } from "react-icons/md";
import Link from "next/link";

export default function signup(){
    return(
        <div className=" flex flex-col items-center w-[100%]">
            <h1 className=" text-4xl mb-10 text-blue-500">Completa tu registro</h1>
            <p className=" text-md w-[90%] mb-5 text-center">Como vendedor, debes de proporcionar mayor información para poder tener una mejor experiencia dentro de la plataforma.</p>
            <form className=" w-[100%] flex items-center justify-center flex-col px-[4rem]">
                <label htmlFor="photo" className=" mb-2 text-blue-400 font-semibold text-left">Foto de perfil</label>
                <div className=" rounded-lg w-[100%] px-[0.4rem] bg-zinc-500 grid grid-cols-10 items-center py-2 mb-3">
                    <MdInsertPhoto className=" text-center text-neutral-700 text-lg " />
                    <input id="photo" className=" col-span-9 text-neutral-800 placeholder:text-neutral-700 bg-zinc-500 outline-none border-none text-lg font-semibold" type="file" placeholder="" />
                </div>
                <label htmlFor="desc" className=" mb-2 text-blue-400 font-semibold text-left">Descripción</label>
                <div className=" rounded-lg w-[100%] px-[0.4rem] bg-zinc-500 py-2 mb-3">
                    <textarea id="desc" rows="8" className=" resize-none p-2.5 w-full text-sm border-none bg-zinc-500 text-neutral-800 placeholder:text-neutral-700" placeholder="Escribe una descripción de qué artículos vendes..."></textarea>
                </div>
                <label htmlFor="desc" className=" mb-2 text-blue-400 font-semibold text-left">¿Qué vendes?</label>
                <div className=" rounded-lg w-[100%] px-[0.4rem] bg-zinc-500 grid grid-cols-10 items-center py-2 mb-5">
                    <MdSell className=" text-center text-neutral-700 text-lg" />
                    <select placeholder="Productos" className=" col-span-9 text-neutral-800 placeholder:text-neutral-700 bg-zinc-500 outline-none border-none text-lg">
                        <optgroup label="Escoge un tipo de productos">
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
                <div className="  w-[100%] flex grid-cols-2 items-center justify-between">
                    <div className=" w-[50%] col-span-1 px-[0.4rem] rounded-lg bg-zinc-500 grid grid-cols-10 items-center py-2 justify-around">
                        <FaCalendar className=" col-span-2 text-center text-neutral-700 text-lg" />
                        <select placeholder="Horario" className=" col-span-8 text-neutral-800 placeholder:text-neutral-700 bg-zinc-500 outline-none border-none text-lg">
                            <optgroup label="Escoge un horario">
                                <option value="1">Matutino</option>
                                <option value="2">Vespertino</option>
                                <option value="3">Mixto</option>
                            </optgroup>
                        </select>
                    </div>
                    <button type="submit" className=" w-[45%] col-span-1 text-center bg-sky-700 rounded-xl py-2 ">Regístrate</button>
                </div>
            </form>
            <p className=" w-[80%] text-xs mt-3 text-blue-600 text-center"> Si se detecta alguna irregularidad con su información o en las actividades que está realizando dentro de marketscom usted acepta que puede ser eliminado de la plataforma.</p>
        </div>
    )
}