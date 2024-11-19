import React from "react";
import { Link } from "react-router-dom";

const Whatsapp = () => {
  const phoneNumber = "7320810579";
  const whatsappLink = `whatsapp://send?phone=${phoneNumber}`;

  return (
    <Link to={whatsappLink} className=" m-2 text-success" target="_blank">
      <i className="fa-brands  fs-4 fa-whatsapp"></i>
    </Link>
  );
};

export default Whatsapp;
