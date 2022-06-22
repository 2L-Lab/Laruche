import React from "react";
import HomeHeader from "../components/HomeHeader";
import Post from "../components/Post";
import About from "../components/About";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <Post />
      <Product />
      <About />
    </div>
  );
};

export default Home;
