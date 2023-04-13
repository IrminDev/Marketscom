import Profile from '../../../components/Profile'

export default function profile({ params }){
    const {id} = params;

    const user1 = {
        id: 1,
        img: '/assets/user.svg',
        nombre: 'Juan',
        apellido: 'Perez',
        producto: 'Electronica',
        turno: 'Matutino',
        boleta: '2020630492',
        descripcion: 'Esta es mi descripcion de usuario',
        type: 'seller',
        correo: 'irmin@gmail.com',
    };

    return(
        // Realizar fetch del usuario con su id
        <Profile user={user1} />
    )
}