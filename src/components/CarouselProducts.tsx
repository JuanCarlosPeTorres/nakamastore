import {
  searchProductByCategory,
  searchProductByMarca,
  searchProductBySerie,
  type ProductNakama,
} from "../lib/data";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

interface CarouselProductsProps {
  productName: string;
  productCategory: string;
  productSerie: string;
  productMarca: string;
}

export const CarouselProducts = ({
  productName,
  productCategory,
  productSerie,
  productMarca,
}: CarouselProductsProps) => {
  const [products, setProducts] = useState<ProductNakama[]>([]);

  const searchProducts = () => {
    if (productSerie !== "") {
      setProducts(searchProductBySerie(productSerie));
    }

    if (products.length === 0) {
      setProducts(searchProductByCategory(productCategory));
    }

    if (products.length === 0) {
      setProducts(searchProductByMarca(productMarca));
    }
  };

  useEffect(() => {
    searchProducts();
  }, []);

  console.log(products);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="slider-container">
     
    </div>
  );
};

