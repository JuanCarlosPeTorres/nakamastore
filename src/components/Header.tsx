import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { SearchProduct } from "./SearchProduct";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-nakama-black text-nakama-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-nakama-white hover:text-nakama-orange focus:outline-none"
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center justify-center mx-auto">
          <span className="text-2xl sm:text-3xl font-bold">NakamaStore</span>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-nakama-white hover:text-nakama-orange focus:outline-none"
          >
            <FaSearch className="w-6 h-6" />
          </button>
        </div>

        <nav className="hidden md:flex space-x-4 mx-auto">
          <a href="#" className="hover:text-nakama-orange">Home</a>
          <a href="#" className="hover:text-nakama-orange">About</a>
          <a href="#" className="hover:text-nakama-orange">Services</a>
          <a href="#" className="hover:text-nakama-orange">Pricing</a>
          <a href="#" className="hover:text-nakama-orange">Contact</a>
        </nav>

        <div className="hidden lg:flex">
          <SearchProduct />
        </div>
      </div>

      <div className={`${menuOpen ? "block" : "hidden"} md:hidden bg-nakama-black`}>
        <nav className="flex flex-col items-center space-y-2 py-4">
          <a href="#" className="hover:text-nakama-orange">Home</a>
          <a href="#" className="hover:text-nakama-orange">About</a>
          <a href="#" className="hover:text-nakama-orange">Services</a>
          <a href="#" className="hover:text-nakama-orange">Pricing</a>
          <a href="#" className="hover:text-nakama-orange">Contact</a>
        </nav>
      </div>

      <div className={`${searchOpen ? "block" : "hidden"} md:hidden bg-nakama-black`}>
        <div className="flex justify-center py-4">
          <SearchProduct />
        </div>
      </div>
    </header>
  );
};
