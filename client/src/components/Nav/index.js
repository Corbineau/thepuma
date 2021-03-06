import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        The Puma
      </a>
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/books/saved">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;
