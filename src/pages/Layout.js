import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="navbar">
        <a href="/ayushtiwari">
          <h2 className="logo">Ayush</h2>
        </a>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
export default Layout;
