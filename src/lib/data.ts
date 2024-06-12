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
  
  import productsData from './products.json';
  
  function parseProducts(data: any[]): ProductNakama[] {
    return data.map(product => ({
      marca: product.Marca,
      categoria: product.Categoria,
      serie: product.Serie,
      nombre: product.TituloDelProducto,
      exclusivos: product.Exclusivos,
      precio: product.Precio,
      descuento: product.Descuento ? parseFloat(product.Descuento) : "", // Parsear el descuento si existe
      imagen: product.Imagen
    }));
  }
  
  // Parsear los datos JSON
  const data: ProductNakama[] = parseProducts(productsData);
  
  // Función para obtener los productos
  export function getData(): ProductNakama[] {
    return data;
  }

  export function getProduct(nombre: string): ProductNakama | undefined {
    return data.find(product => product.nombre === nombre);
  }

  export function searchProduct(nombre: string): ProductNakama[] {
    return data.filter(product => product.nombre.toLowerCase().includes(nombre.toLowerCase()));
  }
  
  