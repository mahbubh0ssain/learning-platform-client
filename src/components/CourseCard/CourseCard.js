import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CourseCard = ({ course }) => {
  const { thumbnail_url, id } = course;
  return (
    <div className="col mt-3 ">
      <div className="card h-100 p-3  ">
        <img
          style={{ height: "218px" }}
          src={thumbnail_url}
          className="card-img-top rounded-3 w-100"
          alt="..."
        />
        <Link to={`/learn/${id}`}>
          <Button variant="outline-primary" className=" mt-3 w-100">
            <h5 className="m-0">Enroll</h5>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
