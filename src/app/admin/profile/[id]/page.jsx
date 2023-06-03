import AdminsProfiles from '../../../components/AdminsProfiles';

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
        <AdminsProfiles user={user1} />
    )
}