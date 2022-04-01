import React from "react";
import { Routes, Route } from "react-router-dom";
import BookDetail from "./client_pages/BookDetail";
import BookList from "./client_pages/BookList";
import BookForm from "./client_pages/BooktForm";
import Dashboard from "./client_pages/Dashboard";
import ClientLayout from "./client_pages/layout";

function AppClone() {
  return (
    <div>
      <h1>Book Store</h1>
      <Routes>
        <Route path={"/"} element={<ClientLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={"books"}>
            <Route index element={<BookList />} />
            <Route path={":id"} element={<BookDetail />} />
            <Route path={"create"} element={<BookForm />} />
            <Route path={"edit/:id"} element={<BookForm />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default AppClone;
