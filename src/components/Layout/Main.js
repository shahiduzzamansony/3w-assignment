import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavbarApp from "../Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <NavbarApp></NavbarApp>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
