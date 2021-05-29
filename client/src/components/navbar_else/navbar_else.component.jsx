import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "./navbar_else.styles.css";

function NavbarElse() {
  return (
    <div>
      <Navbar
        bg="white"
        expand="lg"
        className="navbar nav_else shadow-sm bg-white rounded"
      >
        <Navbar.Brand href="#home">
          <Link to="/" className="nav_else_brand">
            Brand Name
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav.Link href="#" className="">
            <Link to="/professional" className="nav_else_link proff_text_else">
              {" "}
              Register as a professional
            </Link>
          </Nav.Link>
          <Nav.Link href="#">
            <Link
              to="/bookings"
              className="nav_else_link hover-underline-animation"
            >
              My Bookings
            </Link>
          </Nav.Link>
          <Nav.Link href="#">
            <Link
              to="/logout"
              className="nav_else_link hover-underline-animation"
            >
              Logout
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarElse;
