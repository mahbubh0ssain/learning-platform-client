import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/Context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const MySwal = withReactContent(Swal);

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(false);
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
  const darkOrLight = () => {
    setTheme(!theme);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="light"
        className="py-3"
      >
        <Container>
          <Link
            className="text-decoration-none d-flex align-items-center"
            to="/"
          >
            <img
              style={{ height: "48px" }}
              className="img-fluid rounded-5 me-3"
              src="https://img.freepik.com/free-vector/book-with-lighbulb-cartoon-vector-icon-illustration-object-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4009.jpg"
              alt=""
            />
            <Navbar.Brand className="text-white">
              <h4 className="m-0">Learn Shine</h4>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto  text-white ">
              <Link
                className="me-3 text-decoration-none text-white fw-bold"
                to="/"
              >
                Home
              </Link>
              <Link
                className="me-3 text-decoration-none text-white fw-bold"
                to="/learn"
              >
                Learn
              </Link>
              <Link
                className="me-3 text-decoration-none text-white fw-bold"
                to="faq"
              >
                FAQ
              </Link>
              <Link
                className="me-3 text-decoration-none text-white fw-bold"
                to="blog"
              >
                Blog
              </Link>
              {
                <div onClick={darkOrLight} style={{ cursor: "pointer" }}>
                  {!theme ? (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-brightness-high"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                      </svg>
                    </div>
                  ) : (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-brightness-low-fill text-dark"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
                      </svg>
                    </div>
                  )}
                </div>
              }
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
                      className="rounded-circle me-3 ms-3"
                      style={{ height: "35px", width: "35px" }}
                      src={user?.photoURL}
                      alt=""
                    />
                  </OverlayTrigger>
                ))}

                <div
                  style={{ cursor: "pointer", font: "20px" }}
                  onClick={logOut}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-arrow-return-right text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <Link
                className="me-3 ms-3 text-decoration-none  btn btn-outline-light"
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
