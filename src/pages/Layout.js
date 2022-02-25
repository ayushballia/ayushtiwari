import React from "react";
import { Outlet, Link } from "react-router-dom";
import { CgMenuRound, CgCloseO } from "react-icons/cg";

const Layout = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const mobileNav = () => {
    setIsOpen((isOpen) => !isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <div className="navbar">
        <a href="/ayushtiwari">
          <h2 className="logo">Ayush</h2>
        </a>
        <div className="menu-btn">
          {isOpen ? (
            <CgMenuRound onClick={mobileNav} />
          ) : (
            <CgCloseO onClick={mobileNav} />
          )}
        </div>
        <nav>
          <ul className={isOpen ? "menu-items" : ""}>
            <li>
              <Link to="/" onClick={mobileNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={mobileNav}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={mobileNav}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
export default Layout;
