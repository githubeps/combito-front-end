export class MenuModel {

    constructor(
        public idmenu:string = null,
        public label:string = null,
        public routerlink: string = null,
        public leaf: number = null,
        public oreden?: number,
        public icon?: string,
        public obs?: string
    ) {

    }
}
