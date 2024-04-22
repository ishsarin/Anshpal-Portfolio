import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav_css ">
        <div className="container-fluid">
          <span className="navbar-brand name col-md-6" to="/">
            ANSHPAL SAHNI
          </span>

          {/* <span className="name">MOHIT MOHAN </span> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div
              className="collapse navbar-collapse"
              id="navbarNav"
              className="navbarNav_css"
            > */}
          <div
            className="collapse navbar-collapse col-md-6"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <ul className="navbar-nav"> */}
              <li className="nav-item">
                <Link
                  to="/allprojects"
                  className="nav-link "
                  aria-current="page"
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  aria-current="page"
                  href="https://drive.google.com/file/d/1w84x-DefuTLXcofAI0ZaSuX54E-7JhfQ/view?usp=sharing"
                  target="_blank"
                >
                  RESUME
                </a>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link " aria-current="page">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
