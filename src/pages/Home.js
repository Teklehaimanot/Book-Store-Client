import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="flex flex-col space-y-2 h-screen">
      <Header />
      <Banner />
      <div>list</div>
    </div>
  );
};

export default Home;
