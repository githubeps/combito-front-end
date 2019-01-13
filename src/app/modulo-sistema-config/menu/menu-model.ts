export class MenuModel {

    private idmenu: string='';
    private label: string ;
    private leaf: number ;
    private obs: string ;
    private routerlink: string ;
    private orden: number ;
    private state:string;
    private name:string;
    private type:string;
    private icon:string;


	constructor(idmenu?, label?, leaf?, obs?, routerLink?, orden?, state?,name?,type?,icon?) {
        this.idmenu = idmenu;
        this.label = label;
        this.leaf = leaf;
        this.obs = obs;
        this.routerlink = routerLink;
        this.state = state;
        this.name = name;
        this.type = type;
        this.icon = icon;
        this.orden = orden;
	}




}
