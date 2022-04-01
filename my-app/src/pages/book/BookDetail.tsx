import React from "react";
import { useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams();
  return <div>Book Detail</div>;
}

export default BookDetail;
