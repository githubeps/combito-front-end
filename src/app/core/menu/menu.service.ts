import { Injectable } from '@angular/core';
// desde controles 2
export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  idmenu: string;

}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
  idmenu: string;
}

const MenuUsuario = [];

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'explore',
    idmenu: '01'
  },

  {
    state: 'sigweb',
    name: 'MAPA',
    type: 'sub',
    icon: 'apps',
    idmenu: '02',
    badge: [
      { type: 'red', value: '9' }
    ],
    children: [
      { state: 'mapa', name: 'Consulta', idmenu: '0201' },


    ]
  },
/*   {
    state: 'consultas',
    name: 'CONSULTAS',
    type: 'sub',
    icon: 'business',
    idmenu: '03',
    badge: [
      { type: 'red', value: '8' }
    ],
    children: [
      { state: 'resultado-votos', name: 'Resultados', idmenu: '0301' },
      { state: 'mesas-pendientes-votos', name: 'Mesas Pendientes', idmenu: '0302' }

    ]
  },

  {
    state: 'configuracion',
    name: 'CONFIGURACION',
    type: 'sub',
    icon: 'local_grocery_store',
    idmenu: '06',
    badge: [
      { type: 'red', value: '1' }
    ],
    children: [
      { state: 'menu', name: 'Menus', idmenu: '0601' },
      { state: 'perfiles', name: 'Perfiles', idmenu: '0602' },
      { state: 'usuarios', name: 'Usuarios', idmenu: '0603' },

    ]
  }
  ,

  {
    state: 'tablas',
    name: 'TABLAS',
    type: 'sub',
    icon: 'apps',
    idmenu: '07',
    badge: [
      { type: 'red', value: '4' }
    ],
    children: [
      { state: 'personeros', name: 'Personeros', idmenu: '0701' },
      { state: 'asignacion-mesas', name: 'Asignacion de mesas', idmenu: '0702' }


    ]
  } */

];

@Injectable()
export class MenuService {
  getAll(): Menu[] {

    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }

  getAllMenuUsuario() {
    return MenuUsuario;
  }

  addMenuUsuario(menu) {

    MenuUsuario.push(menu);
  }

  resetMenuUsuario() {
    MenuUsuario.length = 0
  }
}
