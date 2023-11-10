import React from "react";
import "../Components/style.css";
import { Link } from "react-router-dom";
import { ROUTERS } from "../utils/router";
export default function ({ item }) {
  return (
    <Link to={`${ROUTERS.USER.ProductDetail}/${item.id}`}>
      <div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src={item.image} alt />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">{item.name_product}</span>
                    <span className="p-company">{item.nsx}</span>
                  </div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <a className="cart" href="#">
                  <span className="price">{item.gia}</span>
                  <span className="add-to-cart">
                    <span className="txt">Xem chi tiết</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
