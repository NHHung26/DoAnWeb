import React from "react";

export default function DichVu() {
  const productList = [
    {
      id: 1,
      name: "chivas 12",
      price: 50,
      img: "https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_640.jpg",
    },
    {
      id: 2,
      name: "a",
      price: 20,
      img: "https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_640.jpg",
    },
    {
      id: 3,
      name: "b",
      price: 30,
      img: "https://cdn.pixabay.com/photo/2014/08/26/20/08/man-428392_640.jpg",
    },
    {
      id: 4,
      name: "c",
      price: 40,
      img: "https://cdn.pixabay.com/photo/2016/11/29/15/05/drink-1870139_640.jpg",
    },
  ];
  const renderTable = () => {
    return productList.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} />
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Image</td>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}
