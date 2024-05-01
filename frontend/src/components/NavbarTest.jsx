import { Link } from "react-router-dom";
import ButtonMailto from "./Email";
import "../App.css";

import phoneSymbol from "../assets/svg/phone.svg";
import emailSymbol from "../assets/svg/email.svg";

export default function NavbarTest() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-white">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link to="/">
            <div className="flex-1 px-2 mx-2">Wagwise</div>
          </Link>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link to="/about-me">
                  <a>About Me</a>
                </Link>
              </li>
              <li>
                <Link to="/rates">
                  <a>Rates</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/about-me">
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link to="/rates">
              <a>Rates</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
