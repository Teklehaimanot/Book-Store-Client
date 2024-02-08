import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";
import axios from "axios";

const BookList = ({ title }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const basicUrl = process.env.REACT_APP_BACKEND_URL;
  const limit = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `${basicUrl}/books?page=${page}&limit=${limit}&title=${title}`;
      console.log("url", url);
      const response = await axios.get(url);
      setBooks(response.data.books);
      //   setBooks((prevBooks) => [...prevBooks, ...response.data.books]);
      setLoading(false);
    };

    fetchData();
  }, [page, title]);

  return (
    <div className="flex flex-row justify-normal  w-full h-2/3 flex-wrap">
      {books?.map((item) => (
        <BookItem key={item.id} />
      ))}
    </div>
  );
};

export default BookList;
