import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { HiExclamation } from 'react-icons/hi';

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
          <HiExclamation
            style={{ height: "200px", width: "200px", color: "#f90606" }}
          ></HiExclamation>
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
              className="btn btn-primary mt-4"
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