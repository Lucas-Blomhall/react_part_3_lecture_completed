import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-20 border-b bg-gray-50">
        <div className="ml-auto underline">
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
        </div>
      </header>
      <Outlet />
      <footer className="h-20 border-t bg-gray-50">Footer</footer>
    </div>
  );
}

export default Layout;
