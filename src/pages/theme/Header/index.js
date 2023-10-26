import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsFillCartFill } from "react-icons/bs";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-zinc-600 text-white mb-2">
      <div className="flex item-center h-full justify-between">
        <div className="flex items-center font-bold text-3xl">
          <img className="h-16 mr-2" src="your-logo.png" alt="Logo" />
          <h2 className="ml-2">Wine Store</h2>
        </div>

        {/* Thanh tìm kiếm ở giữa */}
        <div className="relative flex items-center justify-center">
          <input
            type="text"
            placeholder=""
            className="w-80 h-9 px-2 py-1 placeholder-gray-500 bg-zinc-700 text-white rounded-full focus:outline-none focus:bg-zinc-800"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="absolute right-3 focus:outline-none" onClick={handleSearch}>
            <FaSearch className="text-xl text-white" />
          </button>
          <button className="absolute right-3 focus:outline-none" onClick={handleSearch}>
            <i className="fas fa-search text-xl text-white"></i>
          </button>
        </div>

        <div className="flex items-center gap-4 md:gap-7 text-white-500">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex font-bold">
            <Link to={"/"}>Home</Link>
            <Link to={"menu/6439561f307ca1a748b152fc"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl relative">
            <Link to="cart">
              <BsFillCartFill className="cursor-pointer" />
            </Link>
            <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full m-0 p-0 text-sm font-bold text-center bg-red-300">
              5 {/* Số lượng sản phẩm trong giỏ hàng */}
            </div>
          </div>

          <div className="cursor-pointer relative">
            <div className="text-3xl w-10 h-10 rounded-full overflow-hidden">
              <div>
                <BsThreeDotsVertical
                  className="cursor-pointer"
                  onClick={toggleDropdown}
                />
              </div>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-2 bg-white py-3 px-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                <Link to={"login"} className="whitespace-nowrap cursor-pointer px-2 md:text-lg text-gray-800">
                  Login
                </Link>
                <nav className="text-base md:text-lg flex flex-col">
                  <Link to={"/"} className="px-2 py-1 text-gray-800">
                    Home
                  </Link>
                  <Link to={"menu/6439561f307ca1a748b152fc"} className="px-2 py-1 text-gray-800">
                    Menu
                  </Link>
                  <Link to={"about"} className="px-2 py-1 text-gray-800">
                    About
                  </Link>
                  <Link to={"contact"} className="px-2 py-1 text-gray-800">
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
