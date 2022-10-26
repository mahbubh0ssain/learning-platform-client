import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/Context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Button } from "react-bootstrap";
const MySwal = withReactContent(Swal);

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const logOut = () => {
    userLogOut()
      .then(() => {
        MySwal.fire({
          icon: "success",
          title: "Log out successful.",
        });
        navigate("/");
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

            {user?.uid ? (
              <>
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip
                        className="position-absolute"
                        id={`tooltip-${placement}`}
                      >
                        {user.displayName}
                      </Tooltip>
                    }
                  >
                    <img
                      className="rounded-circle me-3"
                      style={{ height: "40px", width: "40px" }}
                      src={user?.photoURL}
                      alt=""
                    />
                  </OverlayTrigger>
                ))}

                <div
                  style={{ cursor: "pointer", font: "20px" }}
                  onClick={logOut}
                >
                  <Button variant="secondary" size="sm">
                    Log out
                  </Button>
                </div>
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
