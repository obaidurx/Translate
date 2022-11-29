import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark p-3">
        <Container>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/"
          >
            HOME
          </NavLink>
          <Nav className="">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/language">Project</NavLink>
            <NavLink to="/about">Translate</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
