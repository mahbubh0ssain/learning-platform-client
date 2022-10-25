import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/Context";
const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Link className="text-decoration-none" to="/">
            <Navbar.Brand>Learn Shine</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto  ">
              <Link className="me-3 text-decoration-none text-dark" to="/learn">
                Learn
              </Link>
              <Link className="me-3 text-decoration-none text-dark" to="faq">
                FAQ
              </Link>
              <Link className="me-3 text-decoration-none text-dark" to="blog">
                Blog
              </Link>
              <Link className="me-3 text-decoration-none text-dark">
                Toggle
              </Link>
            </Nav>

            {user?.uid ? (
              <>
                <img src={user?.photoURL} alt="" />
                <p>{user.displayName}</p>
                <Button variant="outline-secondary">Log out</Button>
              </>
            ) : (
              <Link
                className="me-3 text-decoration-none text-dark btn btn-outline-primary"
                to="login"
              >
                Login
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
