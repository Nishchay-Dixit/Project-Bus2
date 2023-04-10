import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container page">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
