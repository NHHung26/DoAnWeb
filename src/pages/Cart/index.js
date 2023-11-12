import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Cart() {
  const [data, setData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/all-cart/");
      const consolidatedData = consolidateQuantities(response.data);
      setData(consolidatedData);
      calculateSubtotal(consolidatedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDecreaseQuantity = async (id) => {
    try {
      // Gọi API để cập nhật giá trị trong bảng Cart
      const response = await axios.put(
        `http://localhost:8000/update-cart/${id}`,
        {
          number: Math.max(1, data.find((item) => item.id === id).number - 1),
        }
      );

      setData((prevData) =>
        prevData.map((item) =>
          item.id === id
            ? { ...item, number: Math.max(1, item.number - 1) }
            : item
        )
      );

      calculateSubtotal(data);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/cart-data/${id}`);
      fetchData();
    } catch (error) {
      console.error(
        "Error deleting item:",
        error.response.data,
        error.response.status
      );
    }
  };

  const consolidateQuantities = (cartItems) => {
    const quantityMap = new Map();
    cartItems.forEach((item) => {
      const existingItem = quantityMap.get(item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        quantityMap.set(item.id, { ...item, quantity: 1 });
      }
    });

    return Array.from(quantityMap.values());
  };
  const handleIncreaseQuantity = async (id) => {
    try {
      // Gọi API để cập nhật giá trị trong bảng Cart
      const response = await axios.put(
        `http://localhost:8000/update-cart/${id}`,
        {
          number: data.find((item) => item.id === id).number + 1,
        }
      );

      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, number: item.number + 1 } : item
        )
      );

      calculateSubtotal(data);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleQuantityChange = async (id, value) => {
    try {
      // Gọi API để cập nhật giá trị trong bảng Cart
      await axios.put(`http://localhost:8000/update-cart/${id}`, {
        number: Math.max(1, value),
      });

      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, number: Math.max(1, value) } : item
        )
      );

      calculateSubtotal(data);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const calculateSubtotal = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.gia * item.number;
    });
    setSubtotal(total);
    setSubtotal(total.toLocaleString());
  };

  const handleCheckout = async () => {
    try {
      await axios.post("http://localhost:8000/checkout");

      setData([]);
      setSubtotal(0);
      fetchData();

      alert("Đặt hàng thành công!");
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className=" mt-10">
      <section className="pt-5 pb-5">
        <div className="container mx-auto">
          <div className="w-full">
            <h3 className="text-5xl mb-2 text-center">Shopping Cart</h3>
            <p className="mb-5 text-center">
              <i className="text-info font-bold">{data.length}</i> items in your
              cart
            </p>
            <table
              id="shoppingCart"
              className="table table-condensed table-responsive w-full"
            >
              <thead>
                <tr>
                  <th className="w-3/5">Product</th>
                  <th className="w-1/8">Price</th>
                  <th className="w-1/10">Quantity</th>
                  <th className="w-4/16" />
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr className="cart-item" key={item.id}>
                    <td data-th="Product">
                      <div className="flex">
                        <div className="w-1/4 text-left">
                          <img
                            src={item.image}
                            alt=""
                            className="img-fluid d-none d-md-block rounded mb-2 shadow"
                          />
                        </div>
                        <div className="w-3/4 text-left mt-sm-2 ml ml-6">
                          <h4>{item.name_product}</h4>
                          <p className="font-light">{item.nsx}</p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">{item.gia} $</td>
                    <td>
                      <div className="quantity ml-10">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.number}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id_product,
                              e.target.value
                            )
                          }
                        />
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="actions" data-th>
                      <div className="text-right">
                        <button
                          className="btn btn-white border-secondary bg-white btn-md mb-2 btn-with-border"
                          onClick={() => handleDeleteItem(item.id_product)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="float-right text-right ml-10 mt-8">
              <h4 className="text-xl font-bold">Subtotal:</h4>
              <h1 className="text-2xl font-bold">{subtotal} $</h1>
            </div>
          </div>
          <div className=" flex items-center mt-10">
            <div className="order-2 text-right w-1/2">
              <button
                className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
            <div className="order-1 text-md-left w-1/2">
              <a
                href="http://localhost:3000/products"
                className="text-blue-500"
              >
                <i className="fas fa-arrow-left mr-2" /> Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
