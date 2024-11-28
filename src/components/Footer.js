import React from "react";
import logo from "../images/courthouse.png"
import { useNavigate } from "react-router";
import { checkToken } from "../api/storage";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer pt-5">
      <div className=" w-100">
        <div className="topFooter pb-4 w-100">
          <div
            className="logo m-3"
            style={{ cursor: checkToken ? " pointer" : "default" }}
            onClick={() => (checkToken ? navigate("/") : "")}
          >
           
          </div>
         
        </div>
    
      </div>
    </footer>
  );
};

export default Footer;
