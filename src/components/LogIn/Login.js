import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Login = () => {
  
  return (
    <div>
      <Form
        onSubmit={""}
        className="w-50 mx-auto my-3 bg-light p-5  rounded-3 shadow"
      >
        <h1 className="mb-2 text-center">User Log in</h1>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={""}
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
            onClick={""}
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
          <Button variant="outline-primary" onClick={""}>
            <img
              className="img-fluid me-2"
              style={{ height: "30px", width: "30px" }}
              src={"https://i.ibb.co/L8sxygz/fb.png"}
              alt="..."
            />
            Continue with Facebook
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
