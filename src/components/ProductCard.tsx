import React from "react";
import { type ProductNakama } from "../lib/data";
import { Badge, Tooltip } from "flowbite-react";

interface ProductCardProps {
  productNakama: ProductNakama;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  productNakama: product,
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg max-w-sm p-4 bg-white flex flex-col h-full">
      <a href={`/products/${product.nombre}`} className="flex flex-col h-full">
        <div>
          <div className="flex flex-wrap mb-2 gap-2">
            <Tooltip content={product.categoria} arrow={false}>
              <Badge color="gray" size={"sm"}>
                {product.categoria}
              </Badge>
            </Tooltip>
            <Tooltip content={product.serie} arrow={false}>
              <Badge
                color="info"
                className="inline-block truncate max-w-[6rem] xl:max-w-[11rem] 2xl:max-w-[15rem]"
                size={"sm"}
              >
                {product.serie}
              </Badge>
            </Tooltip>
          </div>
          <div className="relative mb-2">
            <img
              className="w-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
              src={
                product.imagen === "" ? "funkos/01/1.png" : product.imagen
              }
              alt={product.nombre}
            />
            <img
              className="bg-white absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
              src={
                product.imagen === ""
                  ? "funkos/01/2.png"
                  : "funkos/01/2.png"
              }
              alt={product.nombre}
            />
          </div>
        </div>
        <div className="flex-grow p-2">
          <h2 className="text-lg font-extrabold text-gray-800 mb-2 font-sans uppercase">
            {product.nombre}
          </h2>
        </div>
        <div className="mt-auto p-2">
          <p className="text-gray-700 mb-2 text-xl font-sans font-light">
            S/.{product.precio}
          </p>
          <button className="bg-gray-300/40 border-2 hover:border-solid hover:border-spacing-3 hover:border-black text-black font-bold py-2 px-4 rounded-full w-full font-sans">
            COMPRAR
          </button>
        </div>
      </a>
    </div>
  );
};
