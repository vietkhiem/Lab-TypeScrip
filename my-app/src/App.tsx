import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Book from "./pages/book/Book";
import BookDetail from "./pages/book/BookDetail";
import BookForm from "./pages/book/BookForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="App">
        <div>
          <ul>
            <li>
              <Link to={"/"}> Home</Link>
            </li>
            <li>
              {" "}
              <Link to={"/books"}>Client Book</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="book">
            <Route index element={<Book />} />
            <Route path=":id" element={<BookDetail />} />
            <Route path=":id/edit" element={<BookForm />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
