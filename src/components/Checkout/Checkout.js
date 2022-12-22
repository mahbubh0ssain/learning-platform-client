import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/Context";

const Checkout = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const { id, title, thumbnail_url, details, price } = data;
  return (
    <div className="container" style={{ minHeight: "74.2vh" }}>
      <div className="card w-75 my-5  mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={thumbnail_url}
              className="img-fluid p-3"
              alt="thumbnail"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body align-items-center">
              <h6 className="text-primary">Course ID: {id}</h6>
              <h6 className="text-primary">Price: ${price}</h6>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{details}</p>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-center mb-4">
        Thanks, <span className="text-primary">{user.displayName}</span> for
        purchase. Stay with <span className="text-primary">Learn Shine.</span>
      </h4>
    </div>
  );
};

export default Checkout;
