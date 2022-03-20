interface LinksMenu {
  name: string;
  icon: string;
}

interface OpcionesMenu {
  name: string;
  icon: string;
  router: string[]
  query ?: any
}

export interface Menu {
  defaultOptions: OpcionesMenu[];
  accessLink: LinksMenu[];
}

export interface OpcionesCustom {
  name: string;
  router: string[];
}