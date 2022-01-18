import React from "react";
import { Link, useLocation } from "react-router-dom";
interface Props {
  currentPage: string;
}

export default function Navbar() {
  const {pathname} = useLocation();

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-800 h-auto">
      <div className="container flex flex-wrap justify-between items-center mx-auto ">
        <Link to="#" className="flex">
          <img src="./logo.png" className="h-10 mr-3" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Vorstellung Eidechse
          </span>
        </Link>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2  hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-3/12 md:block" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium w-full justify-around">
            <li>
              <Link to="/" className={`nav-item ${pathname === "/" && "text-white font-bold"}`} aria-current="page">
                Start
              </Link>
            </li>
            <li>
              <Link to="/uber_uns" className={`nav-item ${pathname === "/uber_uns" && "text-white font-bold"}`}>
              Über uns
              </Link>
            </li>
            <li>
              <Link to="/fragen" className={`nav-item ${pathname === "/fragen" && "text-white font-bold"}`}>
                Frage
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className={`nav-item ${pathname === "/kontakt" && "text-white font-bold"}`}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
