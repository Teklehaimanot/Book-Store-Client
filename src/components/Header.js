import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const Header = ({ setTitle }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    try {
      setTitle(search);
    } catch (error) {}
  };
  return (
    <div className="flex flex-col md:flex-row justify-between bg-primary text-secondary  border-b border-black shadow-md ">
      <div className="text-xl p-5">MY-BOOK-STORE</div>
      <div className="md:w-1/3 w-full flex justify-start items-center">
        <form
          className="flex flex-row w-full  items-center"
          onSubmit={handleSearch}
        >
          <input
            className=" p-1 mx-4 my-6 rounded-sm w-3/4 shadow border text-primary"
            type="text"
            placeholder="Search book by title"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            type="submit"
            className="border p-2 bg-secondary text-primary rounded"
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
