import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const profile = { displayName, photoURL };
    console.log(displayName, photoURL, email, password);
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="w-50 mx-auto my-3 bg-light p-5  rounded-3 shadow"
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
            placeholder="Password"
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
            onClick={"handleCheckBtnFunc"}
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
          disabled={!"btnCheck"}
          className="w-100"
          variant="primary"
          type="submit"
        >
          Create account
        </Button>
        <p className="text-center mt-2">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <div className="my-3 d-flex justify-content-around align-items-center">
          <hr />
          <small>Or</small> <hr />
        </div>
        <div className="my-3 d-flex justify-content-around align-items-center">
          <Button variant="outline-primary" onClick={""}>
            <img
              className="img-fluid me-2 "
              style={{ height: "30px", width: "30px" }}
              src={"https://i.ibb.co/nCkjPRN/google.png"}
              alt="..."
            />
            Continue with Goggle
          </Button>
          <Button variant="outline-dark" onClick={""}>
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

export default SignUp;
