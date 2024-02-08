import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import Loading from "./Loading";
import BookItem from "./BookItem";

const BookList = ({ title }) => {
  const fetchBooks = async ({ pageParam = 1, queryParam = "" }) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/books/?page=${pageParam}&title=${queryParam}&limit=20`
    );
    return response.data;
  };

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["books", title],
      ({ pageParam }) => fetchBooks({ pageParam, queryParam: title }),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    );

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading && !data) return <Loading />;
  return (
    <div className="flex flex-row justify-normal w-full h-2/3 flex-wrap">
      {data.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </React.Fragment>
      ))}
      {isFetchingNextPage && <Loading />}
    </div>
  );
};

export default BookList;
