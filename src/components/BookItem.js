import React from "react";

const BookItem = ({ book }) => {
  console.log(book);
  return (
    <div className=" w-1/2 md:w-1/6 shadow-lg rounded-sm  h-2/3  flex flex-col items-start border border-primary scale-[.8]">
      <div
        className="bg-cover w-2/3 h-2/3 bg-secondary m-auto border"
        style={{
          backgroundImage: `url("https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg")`,
        }}
      ></div>
      <div className="mx-5">{book.title}</div>
      <div className="mx-5">{book.writer}</div>
      <div className="mx-5">{book.point}</div>
      <div className="mx-5">{book.tags.join(",")}</div>
    </div>
  );
};

export default BookItem;
