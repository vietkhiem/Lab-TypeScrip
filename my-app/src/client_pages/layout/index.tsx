import React from "react";
import { Outlet, Link } from "react-router-dom";

function ClientLayout() {
  return (
    <div>
      <header>HEADER</header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/books"}>Book</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ClientLayout;
