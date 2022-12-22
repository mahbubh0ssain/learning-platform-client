import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import { AuthContext } from "../../context/Context";
import { Link } from "react-router-dom";
const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mt-4 mb-3" style={{ minHeight: "72.2vh" }}>
      <div className="container row row-cols-1 row-cols-md-1 row-cols-lg-2 d-flex me-0 ms-0 ">
        <div className="col pt-4 pe-4">
          {user && (
            <h2>
              Welcome <span className="text-primary">{user?.displayName}</span>
            </h2>
          )}
          <h3 className="mt-3">
            Learn Effectively that will take you towards your goal.
          </h3>
          <p className="mt-3">
            We will ensure our graduates are world-class web developer. The
            secret of success is {"  "}
            <span className="text-primary fw-bold">practice</span>,{" "}
            <span className="text-primary fw-bold">practice</span> and{" "}
            <span className="text-primary fw-bold">practice...</span>
          </p>
          <Link to="/learn">
            <Button className="mt-3" variant="outline-primary">
              Enroll now
            </Button>
          </Link>
        </div>
        <div className="col pt-4  ps-4">
          <Image
            className="img-fluid "
            src="https://gowithcode.com/wp-content/uploads/2021/04/top-programming-languages.jpg"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Home;
