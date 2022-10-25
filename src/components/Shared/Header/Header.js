import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/Context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaUserAlt } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const MySwal = withReactContent(Swal);

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);
  console.log(user);
  const logOut = () => {
    userLogOut()
      .then(() => {
        MySwal.fire({
          icon: "success",
          title: "Log out successful.",
        });
      })
      .catch((err) => {
        MySwal.fire({
          icon: "error",
          title: err.message,
        });
      });
  };
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
            <>
              {["bottom"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      {user.displayName}
                    </Tooltip>
                  }
                >
                  <img
                    className="rounded-circle"
                    style={{ height: "40px", width: "40px" }}
                    src={user?.photoURL}
                    alt=""
                  />
                </OverlayTrigger>
              ))}
            </>
            {user?.uid ? (
              <>
                <img
                  className="rounded-circle"
                  style={{ height: "40px", width: "40px" }}
                  src={user?.photoURL}
                  alt=""
                />

                <Button onClick={logOut} variant="outline-secondary">
                  Log out
                </Button>
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
