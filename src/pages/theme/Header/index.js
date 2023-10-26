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

  const headerStyle = {
    background: "rgba(0, 0, 0, 0)", // Adjust the alpha value for the desired transparency
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50, // Set a higher z-index to overlay the body content
  };

  return (
    <header
      className=" w-full h-16 px-2 md:px-4 bg-zinc-600 text-white mb-2"
      style={headerStyle}
    >
      <div className="flex item-center h-full justify-between">
        <div className="flex items-center font-bold text-3xl">
          <img
            className="h-16 mr-2"
            src="https://www.johnniewalker.com/media/3866/royal-warrant-logo.png?quality=75&format=webp&width=1920&upscale=false"
            alt="Logo"
          />
        </div>

        {/* Thanh tìm kiếm ở giữa */}

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
                <Link
                  to={"login"}
                  className="whitespace-nowrap cursor-pointer px-2 md:text-lg text-gray-800"
                >
                  Login
                </Link>
                <nav className="text-base md:text-lg flex flex-col">
                  <Link to={"/"} className="px-2 py-1 text-gray-800">
                    Home
                  </Link>
                  <Link
                    to={"menu/6439561f307ca1a748b152fc"}
                    className="px-2 py-1 text-gray-800"
                  >
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
