import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const data = useLoaderData();
  const { title, thumbnail_url, details } = data;
  return (
    <div className="container ">
      <div className="card w-75 my-5 mb-3 mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={data.thumbnail_url}
              className="img-fluid rounded-start"
              alt="thumbnail"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body align-items-center">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
