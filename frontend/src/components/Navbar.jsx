import { Link } from "react-router-dom";
import ButtonMailto from "./Email";
import "../App.css";

import phoneSymbol from '../assets/svg/phone.svg'
import emailSymbol from '../assets/svg/email.svg'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 p-0">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn lg:hidden">
            <img src={phoneSymbol} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 md:rounded-box rounded-none w-52"
          >
            <li>
              <Link to="about-me">
                <a>About Me</a>
              </Link>
            </li>
            <li>
              <Link to="rates">
                <a>Rates</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <a className="text-xl ml-5 mr-5">WagWise</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-2">
          <li>
            <Link to="about-me">
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link to="rates">
              <a>Rates</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row md:gap-0 gap-4 items-center md:w-full justify-end md:my-0 my-4">
        <div className="flex md:flex-row flex-col items-center md:ml-0 ml-6">
          <img src={emailSymbol} alt="" />
          <a
            className="md:mr-10 md:ml-2 md:text-base text-[10px]"
            href="tel:+15128253634"
          >
            +1 (512)-825-3634
          </a>
        </div>
        <div className="flex md:flex-row flex-col items-center">
          <svg
            width="28px"
            height="28px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>

          <ButtonMailto />
        </div>
      </div>
    </div>
  );
}
