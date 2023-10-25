import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function MasterLayout({ children, ...props }) {
  return (
    <div {...props}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
