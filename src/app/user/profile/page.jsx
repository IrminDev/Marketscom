'use client'
import Link from 'next/link'
import Profile from '../../components/Profile'

export default function signup(){
    const user1 = {
        id: 1,
        img: '/assets/user.svg',
        nombre: 'Juan',
        apellido: 'Perez',
        producto: 'Electronica',
        turno: 'Matutino',
        boleta: '2020630492',
        descripcion: 'Esta es mi descripcion de usuario',
        type: 'user',
        correo: 'irmin@gmail.com',
    };

    return(
        <Profile user={user1} owner='on' />
    )
}