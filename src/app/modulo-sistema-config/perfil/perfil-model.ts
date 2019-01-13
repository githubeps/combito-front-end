import { PerfilDetalleModel } from "./perfil-detalle-model";

export class PerfilModel {

    constructor(
        public idperfil:number = 0,
        public dscperfil:string = null,
        public idfilial:number= null,
        public perfilesdetalles: PerfilDetalleModel[]=null

    ) {

    }
}
