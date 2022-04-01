import React, { Component, useEffect, useState } from "react";
import { deleteBook, getBooks } from "../client_api/book";
import { Link } from "react-router-dom";
import { TriggerConfig } from "react-hook-form";

class BookListOld extends Component {
  state = {
    count: 0,
  };
  // Chạy vào lần đầu tiên, và chỉ chạy 1 lần
  componentDidMount() {
    console.log("didmount", this.state.count);
  }
  // Chạy khi có sự thay đổi state
  componentDidUpdate() {
    console.log("didupdate", this.state.count);
  }

  render() {
    return (
      <div
        onClick={() =>
          this.setState({
            count: this.state.count + 1,
          })
        }
      >
        BookList Class
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export type BOOK_TYPE = {
  id: number | string;
  name: string;
  price: number;
  category_id: string;
};

function BookList() {
  const [books, setBooks] = useState<BOOK_TYPE[]>([]);

  const handleGetBooks = async () => {
    const response = await getBooks();
    setBooks(response.data);
  };

  const handleDelete = async (id: number | string) => {
    const response = await deleteBook(id);
    if (response.status === 200) {
      handleGetBooks();
    }
  };

  console.log(books);

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <div>
      <div>
        <Link to={"/books/create"}>
          <button>Tạo mới</button>
        </Link>
      </div>

      <table className="customers">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.price}</td>
              <td>{book.category_id}</td>
              <td>
                <Link to={`/books/${book.id}`}>
                  <button>Detail</button>
                </Link>
                <button>Edit</button>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
