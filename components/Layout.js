import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow p-4">{children}</div>
      <Footer />
    </div>
  );
}
