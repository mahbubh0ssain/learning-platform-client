import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Faq = () => {
  return (
    <div className="container">
      <h1 className="my-3">FAQ section.</h1>
      <Accordion className="mb-5" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>For whom this website is?</Accordion.Header>
          <Accordion.Body>
            Who wants to become a web developer. For those who want to learn web
            development from scratch and then get a job in a software company as
            a web developer. For those who don't know much about programming or
            web development.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Whats in the courses?</Accordion.Header>
          <Accordion.Body>
            You can understand that by looking at the course curriculum. But in
            short, this course has everything you need to become a serious web
            developer these days.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How much time needed ti finish?</Accordion.Header>
          <Accordion.Body>Around 4/4.5 months.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What hings I have to need to continue?
          </Accordion.Header>
          <Accordion.Body>
            A laptop or a computer (where node, Visual Studio Code type software
            can be installed) and thirdly you need internet of minimum 2-10
            Mbps. Broadband is preferred so that the course videos can be viewed
            well.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Why it's not FREE?</Accordion.Header>
          <Accordion.Body>
            In this platform around 10/12 persons are directly involved. We have
            to pay the, for their time. on th other hand we also have families.
            😁
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
