import React from "react";
import Footer from "./componets/footer";
import Navbar from "./componets/Navbar";
import Register from "./componets/cards/Register";
import Login from "./componets/cards/Login";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Register />
      <Login />
      <Footer />
    </div>
  );
};

export default Home;
