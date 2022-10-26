import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../context/Context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Login = () => {
  const { user, userSignIn, googleSignIn, githubSignIn, passwordResetEmail } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then(() => {
        form.reset();
        MySwal.fire({
          icon: "success",
          title: "Login successful",
        });
      })
      .catch((err) => {
        MySwal.fire({
          icon: "error",
          title: err.message,
        });
      });
  };
  const signInGoogle = () => {
    googleSignIn()
      .then(() => {
        MySwal.fire({
          icon: "success",
          title: "Successful.",
        });
      })
      .catch((err) => {
        MySwal.fire({
          icon: "error",
          title: err.message,
        });
      });
  };
  const signInGithub = () => {
    githubSignIn()
      .then(() => {
        MySwal.fire({
          icon: "success",
          title: "Successful.",
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
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const passwordReset = () => {
    passwordResetEmail(email)
      .then(() => {
        MySwal.fire({
          icon: "success",
          title: "Password reset email has been sent.",
          text: "Don't worry if the email goes to the spam folder.",
        });
      })
      .catch(() => {});
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);
  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="w-50 mx-auto my-3 bg-light p-5  rounded-3 shadow"
      >
        <h1 className="mb-2 text-center">User Log in</h1>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={getEmail}
            required
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex justify-content-between "
          controlId="formBasicCheckbox"
        >
          <Form.Text
            style={{ cursor: "pointer" }}
            onClick={passwordReset}
            className=" text-primary "
          >
            Forgot Password?
          </Form.Text>
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
        <p className="text-center mt-2">
          Don't have an account? <Link to="/signup">Create an account</Link>
        </p>

        <div className="my-3 d-flex justify-content-around align-items-center">
          <Button variant="outline-primary" onClick={signInGoogle}>
            <img
              className="img-fluid me-2 "
              style={{ height: "30px", width: "30px" }}
              src={"https://i.ibb.co/nCkjPRN/google.png"}
              alt="..."
            />
            Continue with Goggle
          </Button>
          <Button variant="outline-secondary" onClick={signInGithub}>
            <img
              className="img-fluid me-2"
              style={{ height: "30px", width: "30px" }}
              src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
              alt="..."
            />
            Continue with Github
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
