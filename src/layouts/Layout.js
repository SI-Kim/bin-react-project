import React from "react";
import { HomeContainer } from "../containers/index";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <HomeContainer />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
