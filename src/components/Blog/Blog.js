import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Blog = () => {
  return (
    <div className="container" style={{ minHeight: "77.2vh" }}>
      <h3 className="my-3">Some blogs for Learn Shine learners.</h3>
      <Accordion defaultActiveKey="0" flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>What is CORS?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              The full form of CORS is Cross origin Resource Sharing. It is an
              HTTP header based mechanism. It allows a server to indicate any
              origins other than its own from which a browser should permit
              loading resources. Simply, by adding CORS in localhost.3000 (a.g)
              on can load resource from localhost.3000. For security reasons,
              browsers restrict cross-origin HTTP requests initiated from
              scripts. We use CORS to overcome this system.
            </p>
            <img
              className="img-fluid"
              src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png"
              alt=""
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Firebase is a service by Google. It allows us to authenticate it's
              easily without creating a server by manually. It stores data in
              it's own server and provide us. There are severals alternatives of
              Firebase. They are
            </p>{" "}
            <ul>
              <li>MongoDB</li>
              <li>Oracle Database</li>
              <li>Amazon Redshift</li>
              <li>DataStax Enterprise</li>
              <li>Redis Enterprise</li>
              <li>Cloud Cloudera Enterprise Data Hub</li>
              <li>Db2</li>
              <li>Couchbase Server</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5>How does the private route work?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Public route is open for all in a website. But private/protected
              route is not for all. It is only for the authenticated users.
              There is no vast difference between pubic and private route. The
              only difference is that private route redirect URL and
              authenticate condition. If the user is authenticated then he/she
              will get the access otherwise he/she will be redirected to login
              page. After creating an account or log in they will be able to
              browse those pages or get the desired service.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>What is Node? How does it work?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Node is a JavaScript runtime not a programming language or of
              framework/library. It allows JavaScript to run on the server side
              of the application. For this we can use JavaSc r ipt both on
              frontend and backend. For Chrome browser it r uns by V8 engine
              which convert JS code into machine code. I t is highly scalab
              lightweight, fast, and data-intensive. Nod e is completely event
              driven mechanism. Server consists of one t h read processing on
              event after another. Node can do non b locking I/O operati the
              server process something it does not take rest for the completion,
              instead registers a callback function.
            </p>
            <img
              className="img-fluid"
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210916203407/WorkingofNodejs1.png"
              alt=""
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
