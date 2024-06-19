import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard.tsx";
import { getData, type ProductNakama } from "../lib/data.ts";
import { Flowbite, Pagination } from "flowbite-react";
import { buttonTheme, paginationTheme } from "../utils/theme.ts";

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductNakama[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(12);

  const totalProducts = Math.ceil(products.length / productsPerPage);

  const firstIndex = (currentPage - 1) * productsPerPage;
  const lastIndex = firstIndex + productsPerPage;

  const productsList = async () => {
    const products = getData();
    setProducts(products);
  };

  const onPageChange = (page: number) => setCurrentPage(page);

  useEffect(() => {
    productsList();
  }, []);

  return (
    <Flowbite
      theme={{ theme: { pagination: paginationTheme, button: buttonTheme } }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products
            .slice(firstIndex, lastIndex)
            .map((product: ProductNakama, index: number) => (
              <ProductCard key={index} productNakama={product} />
            ))}
        </div>

        <div className="flex overflow-x-auto sm:justify-center mt-8">
          <Pagination
            theme={paginationTheme}
            totalPages={totalProducts}
            currentPage={currentPage}
            onPageChange={onPageChange}
            previousLabel="<"
            nextLabel=">"
          />
        </div>
      </div>
    </Flowbite>
  );
};
