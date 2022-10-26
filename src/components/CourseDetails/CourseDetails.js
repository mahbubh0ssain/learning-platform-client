import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseDetails = () => {
  const course = useLoaderData();
  const { id, title, author, image_url, details } = course;
  const navigate = useNavigate();
  const { name, img } = author;

  return (
    <div className="container my-3">
      <div className=" my-3 d-flex justify-content-center align-items-center">
        <h5 className="me-3 mb-0">Course details {title} </h5>

        <Pdf targetRef={ref} filename="learn-shine-course.pdf">
          {({ toPdf }) => (
            <div style={{ cursor: "pointer" }} onClick={toPdf}>
              <FaFilePdf />
            </div>
          )}
        </Pdf>
      </div>
      <Card ref={ref} className="w-75   mx-auto">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Image
              className="me-2"
              style={{ height: "50px", width: "50px" }}
              src={img}
              roundedCircle
            ></Image>
            <div>
              <h5 className="mb-0">{name ? name : "No author name found"}</h5>
            </div>
          </div>
        </Card.Header>
        <Card.Img
          variant="top"
          className="img-fluid p-3 "
          style={{ height: "350px" }}
          src={image_url}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>{details}</p>
            <Button onClick={() => navigate(-1)}>Back</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="text-center my-3">
        <Link to={`/checkout/${id}`}>
          <Button>Get premium access</Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
