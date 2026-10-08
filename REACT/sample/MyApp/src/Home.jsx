import React from "react";
import Footer from "./componets/footer";
import Navbar from "./componets/Navbar";
import Register from "./componets/cards/Register";
import Login from "./componets/cards/Login";
import Profile from "./componets/Profile";
import User from "./componets/User";
import Counter from "./componets/Counter";
import Name from "./componets/Name";



const Home = () => {
  return (
    <div>
      <Navbar />
      <Register />
      <Login />
      <Footer />
      <User></User>
      <Counter></Counter>
      <Name></Name>
      
    </div>
  );
};

export default Home;
