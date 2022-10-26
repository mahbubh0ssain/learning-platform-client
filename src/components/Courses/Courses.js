import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import LeftSide from "../LeftSide/LeftSide";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <Container className="my-4">
      <Row>
        <Col className="" lg={3}>
          <LeftSide courses={courses}></LeftSide>
        </Col>
        <Col
          className="mt-0 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
          lg={9}
        >
          {courses.map((course) => (
            <div key={course.id} className="col">
              <div className="card h-100 p-3 position-relative ">
                <img
                  src={course.thumbnail_url}
                  className="card-img-top rounded-3"
                  alt="..."
                />

                <Link to={`/learn/${course.id}`}>
                  <div className="btn btn-primary mt-3 w-100 position-absolute bottom-0 left-0">
                    Enroll
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
