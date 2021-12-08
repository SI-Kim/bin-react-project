import React from "react";
import { HomeContainer } from "../containers/index";

const Layout = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <HomeContainer />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
