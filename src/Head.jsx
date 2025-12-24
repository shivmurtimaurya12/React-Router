import React from "react";
import { Link, Outlet} from "react-router-dom";

function Head() {
  return (
    <>
      <h1>hello This is head</h1>
      <Link to="/head/headtopic">Head Topic</Link>
      <Outlet/>
      
    </>
  );
}

export default Head;
