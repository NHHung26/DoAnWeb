import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineClockCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className=" bg-slate-400 text-black mt-5 py-5  bg-transparent border-t  border-slate-400 shadow-md">
      <div className="container px-4 py-2 mx-auto lg:flex lg:justify-between ">
        <div className="lg:w-1/3">
          <Link to="/" className="flex items-center">
            <img
              className="h-16 mr-2"
              src="https://www.johnniewalker.com/media/3866/royal-warrant-logo.png?quality=75&format=webp&width=1920&upscale=false"
              alt="Logo"
            />
            <span className="text-2xl font-semibold">Wine Store</span>
          </Link>
          <p className="mt-2 text-sm">
            We serve the most exquisite pastries and bread in town. Come visit
            us!
          </p>
          <div className="mt-2 flex items-center text-sm">
            <AiOutlinePhone className="text-xl mr-1" />
            <span>+123-456-7890</span>
          </div>
          <div className="mt-1 flex items-center text-sm">
            <AiOutlineMail className="text-xl mr-1" />
            <span>WineStore@gmail.com</span>
          </div>
          <div className="mt-1 flex items-center text-sm">
            <AiOutlineClockCircle className="text-xl mr-1" />
            <span>7:00am - 10:00pm</span>
          </div>
        </div>
        <div className="lg:w-1/3 mt-5 lg:mt-0">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <nav className="mt-2 text-sm">
            <Link
              to="/"
              className="block py-1 hover:underline hover:text-red-500"
              activeclassname="underline"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="block py-1 hover:underline  hover:text-red-500"
              activeclassname="underline"
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="block py-1 hover:underline  hover:text-red-500"
              activeclassname="underline"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-1 hover:underline  hover:text-red-500"
              activeclassname="underline"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="lg:w-1/3 mt-5 lg:mt-0">
          <h3 className="text-lg font-medium">Newsletter</h3>
          <p className="mt-2 text-sm">Sign up to receive the latest updates</p>
          <form className="mt-2 flex">
            <input
              type="email"
              className="w-full px-3 py-1 placeholder-gray-600 bg-gray-900 rounded-md text-gray-100 text-sm focus:outline-none focus:bg-gray-800 focus:shadow-outline-gray"
              placeholder="Enter your email"
            />
            <button className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-400 focus:outline-none focus:bg-red-600 text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
