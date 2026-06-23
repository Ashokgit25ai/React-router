import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>
        <h3>Page Not Found!</h3>
        <p>
          Go to 
          <Link to="/">
            <button>Home</button>
          </Link>
           Page
        </p>
      </div>
    </div>
  );
};

export default NotFound;
