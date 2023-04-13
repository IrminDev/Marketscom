import ChatContainer from '../../../components/ChatContainer'

export default function report({ params }){
    const { id } = params;
    const user = {
        id: 1,
        img: '/assets/user.svg',
        nombre: 'Juan',
        apellido: 'Perez',
        producto: 'Electronica',
        turno: 'Matutino',
    };

    return(
        <div className=' flex items-center min-h-screen justify-center'>
            <ChatContainer user={user} />
        </div>
    )
}