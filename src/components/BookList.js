import React from "react";
import BookItem from "./BookItem";

const BookList = () => {
  return (
    <div className="flex flex-row justify-normal  w-full h-2/3 flex-wrap">
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
    </div>
  );
};

export default BookList;
