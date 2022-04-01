import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../client_api/book";
import { BOOK_TYPE } from "./BookList";

function BookDetail() {
  const { id } = useParams();

  const [book, setBook] = useState<BOOK_TYPE>();

  const handleGetBookDetail = async () => {
    const response = await getBook(id);
    setBook(response.data);
  };

  useEffect(() => {
    handleGetBookDetail();
  }, []);

  return (
    <div>
      Book Detail
      <p>ID: {book?.id}</p>
      <p>Name: {book?.name}</p>
      <p>Price: {book?.price}</p>
      <p>Category:{book?.category_id}</p>
    </div>
  );
}

export default BookDetail;
