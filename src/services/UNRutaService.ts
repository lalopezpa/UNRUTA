import usersData from "./usuariosData.json"
import {user ,NonSensitiveInfoUser,newUser} from "../types"

const users: Array<user> = usersData as  Array<user> //obligarlo a considerar el tipo

export const getEntries = ():user[]  => users

//encontrar por id usuarios
export const findById = (user_id:number):NonSensitiveInfoUser |undefined=>{
    const entry = users.find(u => u.user_id == user_id)
    if (entry != null){
       const{correo,contrasena,...restOfUsuario} = entry 
        return restOfUsuario
    }
    return undefined
}

//recuperar datos excepto la información sensible
export const getEntriesWithoutSensitiveInfo = () : Array<NonSensitiveInfoUser> => {
    return users.map(({user_id,nombre,telefono,tipo})=>{ //por revisar
        return {
            user_id,
            nombre,
            telefono,
            tipo
        }
    })
}

//ingresar nuevos usuarios
export const addUser = (newUser: newUser):
user => {
    const usuarioEntry = {
        //user_id: usuarios.length +1 //la longitud seria el id 
        user_id: Math.max(...users.map(u =>u.user_id)) + 1, //el max id
        ...newUser
    }
    users.push(usuarioEntry) //ingresamos el nuevo usuario
    return usuarioEntry
}
