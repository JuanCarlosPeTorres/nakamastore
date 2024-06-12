import React, { useEffect, useRef, useState } from "react";
import { searchProduct, type ProductNakama } from "../lib/data";

export const SearchProduct: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [products, setProducts] = useState<ProductNakama[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const searchProductByName = async () => {
    setLoading(true);
    setError(null);
    try {
      const response: ProductNakama[] = await searchProduct(query);
      setProducts(response);
    } catch (err) {
      setError("Error al buscar los productos");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    if (event.target.value === "") {
      setProducts([]);
    } else {
      searchProductByName();
    }
  };

  const searchResultsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target as Node)
      ) {
        setProducts([]);
        setIsFocused(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProductClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    window.location.href = event.currentTarget.href;
  };

  return (
    <div className="relative mx-auto">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          placeholder="Buscar"
          className={`border p-2 rounded transition-all duration-300 ${
            isFocused ? "w-96" : "w-64"
          }`}
        />
      </div>

      {isFocused && products.length > 0 && (
        <div
          ref={searchResultsRef}
          className="absolute mt-2 left-0 w-full bg-white border rounded shadow-md max-h-60 overflow-y-auto z-50"
        >
          {products.map((product, index) => (
            <a
              href={`/products/${product.nombre}`}
              key={index}
              className="block p-2 hover:bg-gray-100"
              onClick={handleProductClick}
            >
              <div className="flex flex-row items-center gap-2">
                <img
                  src={
                    product.imagen === ""
                      ? "../../funkos/01/1.png"
                      : product.imagen
                  }
                  alt={product.nombre}
                  className="w-16 h-16"
                />
                <div>
                  <p className="text-black font-bold">{product.categoria}</p>
                  <h2 className="text-lg font-medium text-gray-800 font-sans uppercase">
                    {product.nombre}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {loading && <div>Cargando...</div>}
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};
