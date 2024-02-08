import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";
import axios from "axios";
import Loading from "./Loading";

const BookList = ({ title }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const basicUrl = process.env.REACT_APP_BACKEND_URL;
  const limit = 12;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = `${basicUrl}/books?page=${page}&limit=${limit}&title=${title}`;
      const response = await axios.get(url);
      console.log(response.data.nextPage);
      setBooks(response.data.books);
      setNextPage(response.data.nextPage);
      //   setBooks((prevBooks) => [...prevBooks, ...response.data.books]);
      setIsLoading(false);
    };

    fetchData();
  }, [page, title]);

  if (isLoading) {
    return (
      <div className="w-1/3 m-auto flex flex-col space-y-5 h-2/3 justify-center  bg-transparent">
        <div className=" p-10 m-auto text-2xl">
          <Loading />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row justify-normal  w-full h-2/3 flex-wrap">
      {books?.map((item) => (
        <BookItem key={item.id} book={item} />
      ))}
    </div>
  );
};

export default BookList;
