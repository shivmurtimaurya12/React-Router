import React from "react";
import { Link, Outlet } from "react-router-dom";

function Info() {
  return (
    <>
      <h1>This is Info section</h1>
      <Link to="/app/info/infotopic">Info Topic</Link>
      <Outlet />
    </>
  );
}

export default Info;
