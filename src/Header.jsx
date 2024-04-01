import React from "react";

import { Link } from 'react-router-dom';
function Header() {

  
  return (
    <>
    
      <header className=" sticky-top text-dark bg-white">
        <div className="navbar navbar-expand-lg navbar-light shadow-lg  text-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              data-bs-target="#menu"
              data-bs-toggle="collapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <img src={"images/user.png "} width="50" alt="" />
            <span>
              <nav className="nav navbar-collapse collapse p-2" id="menu">
                <ul className="navbar-nav m-1">
                 
                </ul>
                <ul className="navbar-nav m-1">
                  <li className="nav-item dropdown">
                    <button
                      className="btn  btn-sm dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Home
                    </button>
                  </li>
                </ul>

                <ul className="navbar-nav m-1">
                  <li className="nav-item dropdown">
                    <button
                      className="btn  btn-sm dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                     About
                    </button>
                  </li>
                </ul>

                <ul className="navbar-nav m-1">
                  <li className="nav-item dropdown">
                    <button
                      className="btn  btn-sm dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Contact
                    </button>
                  </li>
                </ul>

                <ul className="navbar-nav m-1">
                  <li className="nav-item dropdown">
                    <button
                      className="btn  btn-sm dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Blog
                    </button>
                  </li>
                </ul>

                <ul className="navbar-nav m-1">
                  <li className="nav-item dropdown">
                    <button
                      className="btn  btn-sm dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      LANGUAGES
                    </button>
                  </li>
                </ul>
                <ul className="navbar-nav m-1">
                  <Link className="btn btn-primary" to={'/login'}>Login </Link>
                </ul>
                <ul className="navbar-nav m-1">
                  <Link className="btn btn-primary" to={'/register'}>Register </Link>
                </ul>
              </nav>
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
