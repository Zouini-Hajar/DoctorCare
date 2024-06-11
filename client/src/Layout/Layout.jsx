import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";

function Layout() {
  return <div>
    <Header />
    <main>
      <Routers />
    </main>
    <Footer />
  </div>;
}

export default Layout;
