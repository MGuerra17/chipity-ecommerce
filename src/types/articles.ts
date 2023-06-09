export interface article {
  id: number,
  titulo: string,
  descripcion: string,
  categoria: string,
  subcategoria1: string,
  subcategoria2: string,
  precio: number,
  descuento: number,
  imagen: string,
  recomendaciones: string
}

export interface cartArticle extends article {
  amount: number
}