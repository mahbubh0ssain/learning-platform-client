import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSide = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <Link key={course.id} to={`/learn/${course.id}`}>
          <Button className="d-block mb-2 w-100">{course.title}</Button>
        </Link>
      ))}
    </div>
  );
};

export default LeftSide;
