import { FC } from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
