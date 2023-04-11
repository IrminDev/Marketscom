import React from 'react'
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { HiDocumentDuplicate } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className=" fixed left-0 top-0 w-[100%] bg-slate-800 z-10 shadow-md">
        <div className=" ml-[1rem] mr-[1rem] h-[3rem] flex justify-between items-center min-[780px]:h-[4.5rem] min-[1024px]:w-[100%] min-[1024px]:px-[10%] min-[1024px]:justify-between">
            <Link href={'./'} className=" text-slate-400 text-xl font-bold">mark<span className=" text-blue-500">E</span>t<span className=" text-blue-500">SCOM</span></Link>
            <div className="max-md:fixed max-md:bottom-0 max-md:left-0 max-md:bg-slate-800 max-md:shadow-[0_-1px_12px_hsla(207, 89%, 15%, 0.15)] max-md:w-[100%] max-md:h-[4rem] max-md:py-[1rem] max-md:grid max-md:content-center max-md:rounded-[1.25rem_1.25rem_0_0]">
                <ul className="flex justify-around sm:justify-center sm:gap-x-10">
                    <li className=" ">
                        <Link href={'./user'} className="flex transition ease-linear flex-col items-center gap-y-1 font-[600] text-slate-400 md:hover:text-blue-500 ">
                            <AiFillHome className=" text-[1.5rem] md:hidden" />
                            <span className=" text-[0.625rem] max-[320px]:hidden md:text-lg">Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'./user/chat'} className="flex transition ease-linear flex-col items-center gap-y-1 font-[600] text-slate-400 md:hover:text-blue-500">
                            <HiDocumentDuplicate className=" text-[1.5rem] md:hidden" />
                            <span className=" text-[0.625rem] max-[320px]:hidden md:text-lg">Mensajes</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'./user/profile'} className="flex transition ease-linear flex-col items-center gap-y-1 font-[600] text-slate-400 md:hover:text-blue-500">
                            <FaUserAlt className=" text-[1.5rem] md:hidden" />
                            <span className=" text-[0.625rem] max-[320px]:hidden md:text-lg">Perfil</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'./'} className="flex transition ease-linear flex-col items-center gap-y-1 font-[600] text-slate-400 md:hover:text-blue-500 ">
                            <IoMdExit className=" text-[1.5rem] md:hidden" />
                            <span className=" text-[0.625rem] max-[320px]:hidden md:text-lg">Cerrar sesión</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar