import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import LeftSide from "../LeftSide/LeftSide";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  if (courses.length === 0) {
    return (
      <div
        class="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <Container className="my-4">
      <Row>
        <Col className="" lg={3}>
          <LeftSide courses={courses}></LeftSide>
        </Col>
        <Col
          lg={9}
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto g-4 mt-0"
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
