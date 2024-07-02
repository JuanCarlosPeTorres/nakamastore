export interface ProductNakama {
  marca: string;
  categoria: string;
  serie: string;
  nombre: string;
  exclusivos: string;
  precio: number;
  descuento: number | string;
  imagen: string;
}

import productsData from "./products.json";

function parseProducts(data: any[]): ProductNakama[] {
  return data.map((product) => ({
    marca: product.Marca,
    categoria: product.Categoria,
    serie: product.Serie,
    nombre: product.TituloDelProducto,
    exclusivos: product.Exclusivos,
    precio: product.Precio,
    descuento: product.Descuento ? parseFloat(product.Descuento) : "", // Parsear el descuento si existe
    imagen: product.Imagen,
  }));
}

// Parsear los datos JSON
const data: ProductNakama[] = parseProducts(productsData);

// Función para obtener los productos
export function getData(): ProductNakama[] {
  return data;
}

// Función para obtener un producto específico
export function getProduct(nombre: string): ProductNakama {
  const product = data.find((product) => product.nombre === nombre);

  if (product == undefined) {
    throw new Error(`Producto ${nombre} no encontrado`);
  }

  return product;
}

// Función para buscar productos por nombre
export function searchProduct(nombre: string): ProductNakama[] {
  return data.filter((product) =>
    product.nombre.toLowerCase().includes(nombre.toLowerCase())
  );
}

// Función para buscar productos por categoría
export function searchProductByCategory(category: string): ProductNakama[] {
  return data.filter((product) =>
    product.categoria.toLowerCase().includes(category.toLowerCase())
  );
}

// Función para buscar productos por serie
export function searchProductBySerie(serie: string): ProductNakama[] {
  return data.filter((product) =>
    product.serie.toLowerCase().includes(serie.toLowerCase())
  );
}

// Función para buscar productos por marca
export function searchProductByMarca(marca: string): ProductNakama[] {
  return data.filter((product) =>
    product.marca.toLowerCase().includes(marca.toLowerCase())
  );
}
