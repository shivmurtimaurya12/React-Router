import React from "react";
import { Link, Outlet} from "react-router-dom";
function About() {
  return (
    <>
      <div>
        <h1>This is about section </h1>
        <nav>
          <Link to="/about/abouttopic">About the guy</Link>
        </nav>
      <Outlet/>
      </div>
    </>
  );
}

export default About;
