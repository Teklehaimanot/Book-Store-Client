import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import BookList from "../components/BookList";

const Home = () => {
  return (
    <div className="flex flex-col space-y-2 h-screen">
      <Header />
      <Banner />
      <BookList />
    </div>
  );
};

export default Home;
