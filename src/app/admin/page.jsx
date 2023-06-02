import UserAdmin from "../components/UserAdmin"

import { GoReport } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { FaSkullCrossbones } from "react-icons/fa";

export default function signup(){
    const user = {
        id: 1,
        img: '/assets/user.svg',
        nombre: 'Juan',
        apellido: 'Perez',
        producto: 'Electronica',
        turno: 'Matutino',
        boleta: '2019630000',
        estado: 'Reportado',
    };
  
    return (
    <div className="mt-24">
        <div class="flex flex-wrap justify-center w-full">
            <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                <div class="relative flex flex-col min-w-0 break-words bg-slate-800 rounded mb-3 xl:mb-0 shadow-lg">
                    <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1 text-white">
                                <h5 class="text-blueGray-400 uppercase font-bold text-xl">Usuarios registrados</h5>
                                <span class="font-semibold text-2xl text-blueGray-700">70</span>
                            </div>
                            <div class="relative w-auto pl-4 flex-initial">
                                <div class="text-black p-3 text-2xl text-center inline-flex items-center justify-center w-20 h-20 shadow-lg rounded-full  bg-slate-500">
                                    <AiOutlineUser className=" text-slate-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                <div class="relative flex flex-col min-w-0 break-words bg-slate-800 rounded mb-4 xl:mb-0 shadow-lg">
                    <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1 text-white">
                                <h5 class="text-blueGray-400 uppercase font-bold text-xl">Usuarios reportados</h5>
                                <span class="font-semibold text-2xl text-blueGray-700">69</span>
                            </div>
                            <div class="relative w-auto pl-4 flex-initial">
                                <div class="text-black p-3 text-2xl text-center inline-flex items-center justify-center w-20 h-20 shadow-lg rounded-full bg-slate-500">
                                    <GoReport className=" text-slate-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                <div class="relative flex flex-col min-w-0 break-words bg-slate-800 rounded mb-6 xl:mb-0 shadow-lg">
                    <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1 text-white">
                                <h5 class="text-blueGray-400 uppercase font-bold text-xl">Usuarios baneados</h5>
                                <span class="font-semibold text-2xl text-blueGray-700">13</span>
                            </div>
                            <div class="relative w-auto pl-4 flex-initial">
                                <div class="text-white p-3 text-2xl text-center inline-flex items-center justify-center w-20 h-20 shadow-lg rounded-full bg-red-500">
                                    <FaSkullCrossbones className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" w-full flex justify-center items-center">
            <div class="flex-row justify-center mt-10 w-[95%] bg-slate-950">
                <UserAdmin user={user}/>
                <UserAdmin user={user}/>
                <UserAdmin user={user}/>
                <UserAdmin user={user}/>
                <UserAdmin user={user}/>
            </div>
        </div>
    </div> 
  )
}