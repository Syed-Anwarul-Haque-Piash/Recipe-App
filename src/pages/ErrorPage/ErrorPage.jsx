import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { HiExclamation } from 'react-icons/hi';
//import { BiErrorCircle, HiExclamation } from 'react-icons/bi';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div>
            <div
        style={{
          backgroundColor: "#7e90fe0d",
          minHeight: "100vh",
          padding: "64px",
        }}
        className="d-flex align-items-center"
      >
        <div className="container d-flex flex-column align-items-center justify-content-center px-5 mx-auto my-5">
          {/* <HiExclamation
            style={{ height: "200px", width: "200px", color: "#f90606" }}
          ></HiExclamation> */}
          <img style={{ height: "300px", width: "400px", color: "#f90606" }} src="https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg" alt="" />
          {/* <BiErrorCircle style={{ height: "200px", width: "200px", color: "#f90606" }}></BiErrorCircle> */}
          
          <div className="max-w-md text-center">
            <h2
              style={{ color: "#f90606", fontWeight: "700", fontSize: "48px" }}
              className="mb-3"
            >
              <span className="sr-only">Error</span> {status || 404}
            </h2>
            <p
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "rgb(145, 150, 153)",
              }}
            >
              {error?.message}
            </p>
            <Link
              to="/"
              style={{ fontSize: "22px", fontWeight: "600" }}
              className="btn btn-danger mt-4"
            >
              Back To Homepage
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ErrorPage;