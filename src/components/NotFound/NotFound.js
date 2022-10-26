import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center  position-absolute top-50 start-50 translate-middle">
      <img
        className="img-fluid"
        src="https://media.istockphoto.com/photos/error-404-number-404-in-three-dimensions-next-to-a-plug-on-a-white-picture-id1339693264?b=1&k=20&m=1339693264&s=170667a&w=0&h=GGBsURG4Iwze_R58ZkW8KuKdNb_aZsrJ_eQ8JfL5zFc="
        alt=""
      />
      <Link to="/" className=" text-decoration-none">
        <Button variant="outline-primary" className="d-block mx-auto">
          Back to home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
