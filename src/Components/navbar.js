/** eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="shadow">
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/Home" className="text-decoration-none">
                    <span
                      className="nav-link active  text-primary"
                      aria-current="page"
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="text-decoration-none">
                    <span
                      className="nav-link active  text-primary"
                      aria-current="page"
                    >
                      products
                    </span>
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>
);

export default NavBar;
