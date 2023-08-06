import React from "react";
import {} from "../style/preNavbar.css";
import { Link } from "react-router-dom";

const cart = (
  <svg
    className="temp"
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 0 24 24"
    width="20px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);
function PreNavbar() {
  return (
    <>
      <nav className="prenavbar">
        <ul className="left">
          <li>
            <Link className="prenavbarNavLinks" to="/">
              mi india
            </Link>{" "}
            <span className="horizontalBar">|</span>
          </li>
          <li>
            <Link className="prenavbarNavLinks" to="/">
              get mi store app
            </Link>{" "}
            <span className="horizontalBar">|</span>
          </li>
          <li>
            <Link className="prenavbarNavLinks" to="/">
              online help
            </Link>{" "}
            <span className="horizontalBar">|</span>
          </li>
          <li>
            <Link className="prenavbarNavLinks" to="/">
              retail store
            </Link>
          </li>
        </ul>
        <ul className="right">
          <li>
            <Link className="prenavbarNavLinks" to="/">
              sign in{" "}
            </Link>{" "}
            <span className="horizontalBar">|</span>
          </li>
          <li>
            <Link className="prenavbarNavLinks" to="/">
              sig nup{" "}
            </Link>{" "}
            <span className="horizontalBar">|</span>
          </li>
          <li>
            <Link to="/" className="cart prenavbarNavLinks">
              {" "}
              <i className="cartIcon">{cart} </i> <span>cart (0)</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default PreNavbar;
