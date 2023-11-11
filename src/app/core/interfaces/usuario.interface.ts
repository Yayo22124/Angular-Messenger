export interface IUsuario {
    name: string,
    image: string,
    status:boolean,
    lastMessage: string,
    seen: boolean,
    history: boolean,
    meGusta?: boolean | null; // el operador ? permite que se vuelva opcional y | permite establecer varios tipados de datos
}

//! null y undefined se diferencian porque undefined no usa espacio en memoria mientras que null sí usa espacio en memoria.