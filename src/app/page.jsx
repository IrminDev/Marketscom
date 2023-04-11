import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="fixed w-[100%]">
        <div className="flex justify-between items-center px-5 py-5 font-semibold">
          <Link href={'./'} className="text-2xl">
            mark<span className='text-blue-500'>E</span>t<span className='text-blue-500'>SCOM</span>
          </Link>
          <div className=" flex justify-between items-center ">
            <ul className=" flex items-center ">
              <li className=" inline-block mr-10 text-blue-500 transition ease-linear hover:text-blue-300">
                <Link href={'./login'} className="">Inicio de sesión</Link>
              </li>
              <li className=" inline-block text-blue-500 transition ease-linear hover:text-blue-300">
                <Link href={'./signup'} className="">Registro</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex items-center h-[100vh] min-h-[500px] bg-escom bg-no-repeat bg-center">
        <div className=' px-10'>
          <h1 className=' text-5xl mb-10 '>¡Bienvenido a marketscom!</h1>
          <p className=' text-xl mb-10'>Martketscom es una plataforma de compra y venta desarrollada para facilitar la comunicación entre alumnos de la ESCOM.</p>
          <Link href={'./signup'} className=' transition ease-linear border rounded-md border-blue-400 px-3 py-2 mt-5 text-blue-300 hover:text-white hover:border-none hover:bg-blue-400'>
            Vamos alla
          </Link>
        </div>
      </div>
    </>
  )
}
