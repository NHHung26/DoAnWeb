import React, { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "../../../api/axios";
import toast, { Toaster } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { logintoken } from "../../../redux/userSlice";
// Thay đổi đường dẫn tới action tương ứng

import Header from "../Header";
import Footer from "../Footer";

export default function MasterLayout({ children, ...props }) {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    console.log(token);

    if (token) {
      (async () => {
        try {
          const res = await axios.get(`http://localhost:8000/api/users`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (res.status === 200) {
            const resData = res.data;
            dispatch(logintoken(resData));
            console.log(res);
          } else {
            navigate("/login");
          }
        } catch (error) {
          console.error(error);
        }
      })();
    } else {
      // Nếu không có token, chuyển người dùng đến trang login
      navigate("/login");
    }
  }, [dispatch, navigate]);

  return (
    <div {...props}>
      <Toaster />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
