import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Context";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const SignUp = () => {
  const { setUser, userSignUp, updateUserProfile, googleSignIn, githubSignIn } =
    useContext(AuthContext);
  const [btnChecked, setBtnChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const profile = { displayName, photoURL };
    userSignUp(email, password)
      .then((res) => {
        setUser(res.user);
        updateUserProfile(profile)
          .then(() => {})
          .catch(() => {});
        form.reset();
        MySwal.fire({
          icon: "success",
          title: "User successfully created",
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
  const btnCheckFunc = (e) => {
    setBtnChecked(e.target.checked);
  };
  const signInGoogle = () => {
    googleSignIn()
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

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="container w-50 mx-auto my-5 bg-light p-5  rounded-3 shadow"
      >
        <h1 className="mb-2 text-center">User Sign up</h1>
        <Form.Group className="mb-3">
          <Form.Label>Your full name</Form.Label>
          <Form.Control
            required
            name="name"
            type="text"
            placeholder="Enter full name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            name="photoURL"
            required
            type="text"
            placeholder="PhotoURL"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
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

        <Form.Group className="mb-3 ">
          <Form.Check
            onClick={btnCheckFunc}
            required
            label={
              <>
                Accept <Link to="/terms">terms and conditions.</Link>
              </>
            }
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button
          disabled={!btnChecked}
          className="w-100"
          variant="primary"
          type="submit"
        >
          Create account
        </Button>
        <p className="text-center mt-2">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <div className="my-3 row row-cols-1 row-cols-md-1 row-cols-lg-2 mx-auto ">
          <div className=" mb-3">
            <Button
              className="w-100"
              onClick={signInGoogle}
              variant="outline-primary"
            >
              <img
                className="img-fluid me-2 "
                style={{ height: "30px", width: "30px" }}
                src={"https://i.ibb.co/nCkjPRN/google.png"}
                alt="..."
              />
              Continue with Goggle
            </Button>
          </div>
          <div className=" mb-3">
            <Button
              className="w-100"
              onClick={signInGithub}
              variant="outline-secondary"
            >
              <img
                className="img-fluid me-2"
                style={{ height: "30px", width: "30px" }}
                src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
                alt="..."
              />
              Continue with Github
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
