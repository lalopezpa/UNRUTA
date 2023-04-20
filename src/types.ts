export type CorreoUNAL =`${string}@unal.edu.co`

export enum tipo{
    P = 'P',
    C = 'C'
}

export interface user {
    user_id: number,
    nombre: string,
    correo: CorreoUNAL,
    contrasena: string,
    telefono: number,
    tipo: tipo
}

//export type NonSensitiveInfousuario = Pick<usuario,'nombre'|'telefono'|'tipo'>
export type NonSensitiveInfoUser = Omit<user,'correo'|'contrasena'> 

//type nuevo para añadir uno nuevo menos el id
export type newUser = Omit<user,'user_id'> 
