import React, { useState } from "react";

export default function LoginPage() {
    const [authMode, setAuthMode] = useState("signin");

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin");
    };

    return (
        <div className="min-h-screen  flex justify-end items-center"
            style={{ backgroundImage: 'url("https://vintagedecor.vn/wp-content/uploads/2019/03/ham-ruou-vintage-decor-52.jpg")', backgroundSize: 'cover' }}

        >

            <div className="bg-white bg-opacity-50 p-8 rounded-lg w-full max-w-md mx-5  font-semibold shadow-lg ">
                <h3 className="text-2xl font-semibold text-center">
                    {authMode === "signin" ? "Sign In" : "Sign Up"}
                </h3>
                <div className="text-center mt-4 ">
                    {authMode === "signin" ? (
                        <p className="text-black">
                            Not registered yet?{" "}
                            <span className="text-blue-600 cursor-pointer" onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </p>
                    ) : (
                        <p>
                            Already registered?{" "}
                            <span className="text-blue-600 cursor-pointer" onClick={changeAuthMode}>
                                Sign In
                            </span>
                        </p>
                    )}
                </div>
                <form className="mt-6">
                    {authMode === "signup" && (
                        <div className="mb-4">
                            <label className="block text-black font-semibold mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="w-full border rounded py-2 px-3 text-black   border-b-gray-300 focus:outline-blue-400"
                                placeholder="e.g. Jane Doe"
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-black text-l font-semibold mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="w-full border-b rounded py-2 px-3 text-black  focus:outline-blue-400"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-l font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full border rounded py-2 px-3 text-black  focus:outline-blue-400"
                            placeholder="Password"
                        />
                    </div>
                    {authMode === "signup" && (
                        <div className="mb-4">
                            <label className="block text-black  text-l font-semibold mb-2">
                                Re-enter Password
                            </label>
                            <input
                                type="password"
                                className="w-full border rounded py-2 px-3 text-black  focus:outline-blue-400 "
                                placeholder="Re-enter Password"
                            />
                        </div>
                    )}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold p-2 rounded focus:outline-none focus:outline-blue-400"
                        >
                            {authMode === "signin" ? "Sign In" : "Sign Up"}
                        </button>
                    </div>
                    <p className="text-center mt-4">
                        Forgot <a href="#" className="text-blue-600">password?</a>
                    </p>
                </form>
            </div>
        </div >
    );
}
