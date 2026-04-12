export interface CatalogoBase {
  id: string;
  codigo: string;
  nombre: string;
}

export type TipoNaveCatalogo = CatalogoBase;
export type MaterialCatalogo = CatalogoBase;
export type ModalidadCatalogo = CatalogoBase;
export type ServicioNave = CatalogoBase;