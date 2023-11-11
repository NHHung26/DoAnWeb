import React, { useState, useEffect } from "react";
import Card from "../../Components/Card";
import axios from "axios";

export default function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/product");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const lineStyle = {
    width: "66.666667%",
    borderTop: "1px solid #000",
    position: "relative",
    margin: "0 auto",
  };
  const anh = {
    height: "700px",
    margin: "270px auto 0px auto",
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
    <div>
      <div className=" mt-28 ">
        <div style={lineStyle}></div>
        <div style={textStyle}>DANH SÁCH SẢN PHẨM</div>
      </div>
      <div className=" grid grid-cols-3 gap-4 w-4/6 mt-6">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
