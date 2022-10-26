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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="text-primary bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
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
