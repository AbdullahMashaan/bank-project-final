import React, { useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { checkToken } from "../api/storage";
import { logout } from "../api/auth";
import logo from "../images/transference.png";
const Nav = () => {
  const navigate = useNavigate();
  const path = useLocation();
  return (
    <header className="header">
      <div className="container-fluid">
        {checkToken() ? (
          <div className="headerContainer">
            <div
              className="logo my-3"
              style={{ cursor: checkToken ? " pointer" : "default" }}
              onClick={() => (checkToken ? navigate("/") : "")}
            >
              <img src={logo} alt=""  width='20px'/>
            </div>
            <nav >
              <ul>
                <li className="fs-2">
                  <NavLink
                    to={"/home"}
                    className={({ isActive }) =>
                      isActive || path?.pathname === "/home" ? "activeLink" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="fs-2"> 
                  <NavLink
                    to={"/transactions"}
                    className={({ isActive }) => (isActive ? "activeLink" : "")}
                  >
                    Transactions
                  </NavLink>
                </li>
                <li className="fs-2">
                  <NavLink
                    to={"/allusers"}
                    className={({ isActive }) => (isActive ? "activeLink" : "")}
                  >
                    Users
                  </NavLink>
                </li>
                <li className="fs-2">
                  <NavLink
                    to={"/profile"}
                    className={({ isActive }) => (isActive ? "activeLink" : "")}
                  >
                    Profile
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="d-flex align-items-center gap-3">
              <button
                className="logoutButton"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="headerContainer">
            <div
              className="logo"
              style={{ cursor: checkToken ? " pointer" : "default" }}
              onClick={() => (checkToken ? navigate("/") : "")}
            >
              <img src={logo} alt="" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
