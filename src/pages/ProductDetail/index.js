import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../ProductDetail/style.css";
import { useDispatch, useSelector } from "react-redux";
export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const handleQuantityChange = (value) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + value));
  };

  const handleAddToCart = async () => {
    try {
      if (user && user.id) {
        await axios.post("http://localhost:8000/add-cart", {
          user_id: user.id,
          id_product: product.id,
          number: quantity,
        });
        console.log(user.id);

        alert("Thêm Vào Giỏ Hàng Thành Công!!!");
      } else {
        console.error(
          "User not logged in. Please log in to add items to the cart."
        );
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  const lineStyle = {
    width: "66.666667%",
    borderTop: "1px solid #000",
    position: "relative",
    margin: "0 auto",
  };

  const textStyle = {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    padding: "10px 20px 10px 20px",
    fontSize: "20px",
    zIndex: 1,
    fontFamily: "'Cinzel', 'Lato', arial, sans-serif",
  };

  return (
    <div className=" mt-16">
      <div className=" mt-28 ">
        <div style={lineStyle}></div>
        <div style={textStyle}>DANH SÁCH SẢN PHẨM</div>
      </div>
      <div className=" mt-10">
        <div className="container">
          <div className="detail">
            <div className="image">
              <img src={product.image} alt={product.name_product} />
            </div>
            <div className="content">
              <h1 className="name">{product.name_product}</h1>
              <div className="price">{product.gia}$</div>
              <div className="quantity">
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                />
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>
              <div className="buttons">
                <button>Check Out</button>
                <button onClick={handleAddToCart}>
                  Add To Cart
                  <span>
                    <svg
                      className
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="description">{product.mo_ta}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
