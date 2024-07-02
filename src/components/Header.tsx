import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { SearchProduct } from "./SearchProduct";
import { PanelLeft } from "./PanelLeft";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggleMenuBar = () => {
    setMenuOpen(!menuOpen);
    setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="bg-nakama-black text-nakama-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleMenuBar}
            className="text-nakama-white hover:text-nakama-orange focus:outline-none"
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center justify-start ml-0">
          <a href="/">
            <span className="text-2xl sm:text-4xl font-bold">NakamaStore</span>
          </a>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleSearch}
            className="text-nakama-white hover:text-nakama-orange focus:outline-none"
          >
            <FaSearch className="w-6 h-6" />
          </button>
        </div>

        <nav className="hidden lg:flex space-x-6 ">
          <a href="/" className="hover:text-nakama-orange text-2xl">
            Inicio
          </a>
          <a href="#" className="hover:text-nakama-orange text-2xl">
            Promociones
          </a>
          <a href="#" className="hover:text-nakama-orange text-2xl">
            Categorías
          </a>
          <a href="#" className="hover:text-nakama-orange text-2xl">
            Exclusivos
          </a>
          <a href="#" className="hover:text-nakama-orange text-2xl">
            Sobre Nosotros
          </a>
        </nav>

        <div className="hidden lg:flex">
          <SearchProduct />
        </div>
      </div>

      <div
        className={`${
          searchOpen ? "block" : "hidden"
        } lg:hidden bg-nakama-black`}
      >
        <div className="flex justify-center py-4">
          <SearchProduct />
        </div>
      </div>

      <div ref={panelRef}>
        <PanelLeft menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
};
