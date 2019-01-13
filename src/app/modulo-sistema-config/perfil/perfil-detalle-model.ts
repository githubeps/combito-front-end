import { PerfilModel } from "./perfil-model";

export class PerfilDetalleModel {  
    constructor(
        public idsysperfilesdetalle: string = null,
        public idmenu: string=null,
        public perfil:PerfilModel=null
    ) {

    }
}
