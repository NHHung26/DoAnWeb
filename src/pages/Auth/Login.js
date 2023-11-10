// LoginPage.js
import React, { useState } from "react";
import axios from "../../api/axios";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    const handelLogin = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/login', { username, password });
            setusername("");
            setPassword("");
            // Redirect to another page if login is successful
            // Replace 'YourRedirectPath' with the path you want to redirect to
            // Example: history.push('/dashboard');
            // or use <Navigate to="/dashboard" /> if using React Router
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="min-h-screen  flex justify-end items-center"
            style={{ backgroundImage: 'url("https://vintagedecor.vn/wp-content/uploads/2019/03/ham-ruou-vintage-decor-52.jpg")', backgroundSize: 'cover' }}
        >
            <div className="bg-white bg-opacity-50 p-8 rounded-lg w-full max-w-md mx-5  font-semibold shadow-lg ">
                <h3 className="text-2xl font-semibold text-center">Sign In</h3>
                <form className="mt-6" onSubmit={handelLogin}>
                    <div className="mb-4">
                        <label className="block text-black text-l font-semibold mb-2">
                            Username
                        </label>
                        <input
                            type="username"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                            className="w-full border-b rounded py-2 px-3 text-black  focus:outline-blue-400"
                            placeholder="username "
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-l font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded py-2 px-3 text-black  focus:outline-blue-400"
                            placeholder="Password"
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold p-2 rounded focus:outline-none focus:outline-blue-400"
                        >
                            Sign In
                        </button>
                    </div>
                    <p className="text-center mt-4">
                        Forgot <a href="#" className="text-blue-600">password?</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
