import React from "react";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-primary text-secondary  border-b border-black shadow-md ">
      <div className="text-xl p-5">MY-BOOK-STORE</div>
      <div className="md:w-1/3 w-full flex justify-start items-center">
        <form className="flex flex-row w-full  items-center">
          <input
            className=" p-1 mx-4 my-6 rounded-sm w-3/4 shadow border"
            type="text"
            placeholder="Search book by title"
          />
          <div className="border p-2 bg-secondary text-primary rounded">
            <FaSearch />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
