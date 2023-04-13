import MessagesContainer from '../../components/MessagesContainer';


export default function chat(){
  const user = {
    id: 1,
    img: '/assets/user.svg',
    nombre: 'Juan',
    apellido: 'Perez',
    producto: 'Electronica',
    turno: 'Matutino',
  };

  return (
    <div className=' flex items-center min-h-screen justify-center'>
      <MessagesContainer user={user} />
    </div>
  )
}
