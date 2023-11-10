
import React, { useState } from "react";
import axios from "../../api/axios";
import { Navigate } from "react-router-dom";

const SignUpPage = () => {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setemail] = useState("");
    const [reenterPassword, setreenterPassword] = useState("");

    const handelSignup = async (event) => {
        event.preventDefault();
        if (password !== reenterPassword) {
            // Handle password mismatch
            console.log("Passwords do not match");
            return;
        }

        const role = 'customer';
        console.log('Data sent:', {
            username,
            password,
            email,
            role,
        });
        try {
            // Gọi API từ backend
            const response = await axios.post('http://localhost:8000/api/users/register', {
                username,
                password,
                email,
                role,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Xử lý kết quả từ API nếu cần
            console.log(response.data);

            // Điều hướng đến trang khác nếu đăng ký thành công
            // Thay 'YourRedirectPath' bằng đường dẫn bạn muốn chuyển hướng đến
            // Ví dụ: history.push('/dashboard');
            // hoặc sử dụng <Navigate to="/dashboard" /> nếu sử dụng React Router
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen  flex justify-end items-center"
            style={{ backgroundImage: 'url("https://vintagedecor.vn/wp-content/uploads/2019/03/ham-ruou-vintage-decor-52.jpg")', backgroundSize: 'cover' }}
        >
            <div className="bg-white bg-opacity-50 p-8 rounded-lg w-full max-w-md mx-5  font-semibold shadow-lg ">
                <h3 className="text-2xl font-semibold text-center">Sign Up</h3>
                <form className="mt-6" onSubmit={handelSignup}>
                    <div className="mb-4">
                        <label className="block text-black  text-l font-semibold mb-2">
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
                        <label className="block text-black  text-l font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="username"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
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
                    <div className="mb-4">
                        <label className="block text-black  text-l font-semibold mb-2">
                            Re-enter Password
                        </label>
                        <input
                            type="password"
                            value={reenterPassword}
                            onChange={(e) => setreenterPassword(e.target.value)}
                            className="w-full border rounded py-2 px-3 text-black  focus:outline-blue-400 "
                            placeholder="Re-enter Password"
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold p-2 rounded focus:outline-none focus:outline-blue-400"
                        >
                            Sign Up
                        </button>
                    </div>
                    {/* ... rest of your code ... */}
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;