import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();

  const navItems = [
    { label: "HOME", to: "/home" },
    { label: "MY LISTINGS", to: "/manage-listings" },
    { label: "MY ORDERS", to: "/my-orders" },
    { label: "LOGIN", to: "/", highlight: true }
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/home" aria-label="Handmade Craft Market home">
          <img src="/images/logo.png" alt="Handmade Craft Market logo" className="brand-logo" />
        </Link>

        <nav className="nav-actions" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.to || (item.to === "/home" && pathname === "/");
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`nav-btn ${item.highlight ? "nav-btn-highlight" : ""} ${isActive ? "nav-btn-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
