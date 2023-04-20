import {newUser,tipo,CorreoUNAL} from "../types"

//verificar que sea string
const isString = (string:string):boolean => {
    return typeof string == 'string' 
}

//verificar que sea number
const isNumber = (number: number): boolean => {
    return typeof number === 'number' && !isNaN(number);
  }
  

//verificar que es correo
const isCorreoUNAL = (string: string): boolean => {
    return string.endsWith('@unal.edu.co');
  }

//verificar que es tipo
const isTipo = (param: any): boolean => {

    return Object.values(tipo).includes(param)
  }


//Revision entrada nombre 
const parseNombre = (nombreFromRequest:any ): string => {
    //revision de string
    if (!isString( nombreFromRequest)){
        throw new Error ('Incorrect or missing nombre')
    }
    return nombreFromRequest
}

//Revision entrada correo 
const parseCorreo = (correoFromRequest:any ): CorreoUNAL => {
    //revision de correo
    if (!isString( correoFromRequest) || !isCorreoUNAL(correoFromRequest)){
        throw new Error ('Incorrect or missing correo')
    }
    return correoFromRequest
}


//Revision entrada contrasena 
const parseContrasena = (contrasenaFromRequest:any ): string => {
    //revision de string
    if (!isString( contrasenaFromRequest)){
        throw new Error ('Incorrect or missing contraseña')
    }
    return contrasenaFromRequest
}


//Revision entrada numero 
const parseTelefono = (TelefonoFromRequest:any ): number => {
    //revision de number
    if (!isNumber( TelefonoFromRequest)){
        throw new Error ('Incorrect or missing telefono')
    }
    return TelefonoFromRequest
}

//Revision entrada tipo 
const parseTipo = (TipoFromRequest:any ): tipo => {
    //revision de number
    if (!isTipo( TipoFromRequest)){
        throw new Error ('Incorrect or missing tipo')
    }
    return TipoFromRequest
}


//parse los datos para no dejar entrar cualquier cosa
const toNewUser = (object: any): newUser =>{
    const newEntry: newUser = {
    nombre:  parseNombre(object.nombre),
    correo: parseCorreo(object.correo),
    contrasena: parseContrasena(object.contrasena),
    telefono: parseTelefono(object.telefono),
    tipo: parseTipo(object.tipo)
    }
    return newEntry
}

export default toNewUser