import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="flex flex-row justify-between bg-primary text-secondary items-center border-b border-black shadow-md ">
      <div className="text-xl p-5">MY-BOOK-STORE</div>
      <div className="w-1/3 flex justify-start items-center">
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
      <div className="border bg-secondary text-primary rounded p-2 mr-5">
        <FaCartShopping />
      </div>
    </div>
  );
};

export default Header;
