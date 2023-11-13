import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../../../redux/userSlice";
import { toast } from "react-hot-toast";

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false); // Cuộn xuống, ẩn header
    } else {
      setVisible(true); // Cuộn lên, hiện header
    }

    setPrevScrollPos(currentScrollPos);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast(" Đăng xuất thành công! See you a later!!!");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
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
    <header
      style={text}
      className={` fixed top-0 w-full z-50 bg-transparent h-16 px-2 md:px-4 shadow-md  bg-zinc-200 text-black mb-2 ${
        visible ? "" : "transform -translate-y-16 opacity-0"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center h-full justify-between">
        <div className="flex items-center font-bold text-3xl">
          <Link to={"/"}>
            <img
              className="h-16 mr-2"
              src="https://www.johnniewalker.com/media/3866/royal-warrant-logo.png?quality=75&format=webp&width=1920&upscale=false"
              alt="Logo"
            />
          </Link>
        </div>
        {/* Search Bar (To the left) */}

        <div className="flex items-center gap-4 md:gap-7 text-black ">
          <div className="flex items-center justify-end ">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-b border-white-500 focus:outline-none text-white-500 text-base md:text-lg w-full"
            />
            <button className="ml-2 text-white-500 text-3xl">
              <IoMdSearch />
            </button>
          </div>
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex font-thin">
            <Link to={"/products"}>Product</Link>
            <Link to={"/about"}>About</Link>
            {userData.username ? (
              <p
                className="cursor-pointer hover:text-red-500 font-bold"
                onClick={handleLogout}
              >
                {userData.fullname}
              </p>
            ) : (
              <Link className="text-3xl" to={"/user"}>
                <RxAvatar />
              </Link>
            )}
          </nav>
          <div className="text-2xl relative font-thin">
            <Link to="cart">
              <BsFillCartFill className="cursor-pointer" />
            </Link>
            <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full m-0 p-0 text-sm font-bold text-center bg-red-300">
              5
            </div>
          </div>
          <div
            className="group cursor-pointer relative"
            onMouseEnter={toggleDropdown}
            onMouseLeave={handleMouseLeave}
          >
            <div className="text-3xl w-10 h-10 rounded-full font-thin overflow-hidden">
              <div>
                <BsThreeDotsVertical className="cursor-pointer" />
              </div>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-2 bg-transparent py-3 px-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {userData.username ? (
                  <p
                    className="cursor-pointer hover:text-red-500 font-bold"
                    onClick={handleLogout}
                  >
                    Logout:({userData.fullname})
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2  md:text-lg hover:text-red-500 font-bold"
                  >
                    Login
                  </Link>
                )}
                <nav className="text-base md:text-lg flex flex-col ">
                  <Link
                    to={"/products"}
                    className="px-2 py-1 text-gray-800  hover:text-red-500 font-bold"
                  >
                    Product
                  </Link>
                  <Link
                    to={"/about"}
                    className="px-2 py-1 text-gray-800  hover:text-red-500 font-bold"
                  >
                    About
                  </Link>
                  <Link
                    to={"/contact"}
                    className="px-2 py-1 text-gray-800  hover:text-red-500 font-bold"
                  >
                    Contact
                  </Link>
                  <Link
                    to={"/user"}
                    className="px-2 py-1 text-gray-800  hover:text-red-500 font-bold"
                  >
                    Settings
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
