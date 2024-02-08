import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import BookList from "../components/BookList";

const Home = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="flex flex-col space-y-2 h-screen">
      <Header setTitle={setTitle} />
      <Banner />
      <BookList title={title} />
    </div>
  );
};

export default Home;
