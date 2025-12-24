import React from "react";
import { Link, Outlet } from "react-router-dom";
function Contact() {
  return (
    <>
      <h1>This is contact section </h1>
      <Link to="/contact/contacts">contacts number</Link>
      <Outlet />
    </>
  );
}

export default Contact;
