import Card from "../components/Card"
import { FaSearch } from 'react-icons/fa'

export default function signup(){
    const user = {
        id: 1,
        img: '/assets/user.svg',
        nombre: 'Juan',
        apellido: 'Perez',
        producto: 'Electronica',
        turno: 'Matutino',
    };

    return(
        <div className=" mt-24">
            <form class="flex items-center justify-center">   
                <label htmlFor="simple-search" class="sr-only">Buscar</label>
                <div class="relative w-[80%]">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaSearch className=" text-gray-400" />
                    </div>
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
                </div>
                <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <FaSearch className=" text-lg" />
                    <span class="sr-only">Buscar</span>
                </button>
            </form>

            <div className=" flex px-10">
                <div className=" pt-8 w-full grid grid-cols-[repeat(3,1fr)] gap-8 max-sm:grid-cols-[repeat(1,1fr)] max-lg:grid-cols-[repeat(2,1fr)]">
                    <Card user={user} />
                    <Card user={user} />
                    <Card user={user} />
                </div>
            </div>
        </div>
    )
}