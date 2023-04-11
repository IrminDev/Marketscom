export default function profile({ params }){
    const {id} = params;

    return(
        <div className=" pt-6">
            Este es el perfil {id}
        </div>
    )
}