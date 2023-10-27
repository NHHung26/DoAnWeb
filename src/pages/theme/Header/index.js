import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false); // Cuộn xuống, ẩn header
    } else {
      setVisible(true); // Cuộn lên, hiện header
    }

    setPrevScrollPos(currentScrollPos);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const text = {
    fontFamily: "'Cinzel', 'Lato', arial, sans-serif",
  };
  return (
    <header style={text}
      className={`fixed top-0 w-full z-50 bg-transparent h-16 px-2 md:px-4 bg-zinc-600 text-black mb-2 ${visible ? "" : "transform -translate-y-16 opacity-0"
        } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center h-full justify-between">
        <div className="flex items-center font-bold text-3xl">
          <img
            className="h-16 mr-2"
            src="https://www.johnniewalker.com/media/3866/royal-warrant-logo.png?quality=75&format=webp&width=1920&upscale=false"
            alt="Logo"
          />
        </div>
        <div className="flex items-center gap-4 md:gap-7 text-white-500">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex font-thin">

            <Link to={"/menu/6439561f307ca1a748b152fc"}>Product</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Avatar</Link>
          </nav>
          <div className="text-2xl relative font-thin">
            <Link to="cart">
              <BsFillCartFill className="cursor-pointer" />
            </Link>
            <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full m-0 p-0 text-sm font-bold text-center bg-red-300">
              5 {/* Số lượng sản phẩm trong giỏ hàng */}
            </div>
          </div>
          <div className="group cursor-pointer relative" onMouseEnter={toggleDropdown}>
            <div className="text-3xl w-10 h-10 rounded-full font-thin overflow-hidden">
              <div>
                <BsThreeDotsVertical className="cursor-pointer" />
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

                  <Link
                    to={"/menu/6439561f307ca1a748b152fc"}
                    className="px-2 py-1 text-gray-800"
                  >
                    Menu
                  </Link>
                  <Link to={"/about"} className="px-2 py-1 text-gray-800">
                    About
                  </Link>
                  <Link to={"/contact"} className="px-2 py-1 text-gray-800">
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
