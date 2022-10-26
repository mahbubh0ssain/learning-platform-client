import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSide = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <Link
          className="text-decoration-none"
          key={course.id}
          to={`/learn/${course.id}`}
        >
          <Button variant="outline-primary" className="d-block  my-3 w-100">
            <h5 className="mb-0">{course.title}</h5>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default LeftSide;
