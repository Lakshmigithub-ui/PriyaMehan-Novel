import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import logo1 from "../../Assets/logo1.png";
import "./Header.css";

function Header() {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [open, setOpen] = useState(false);
  const menuClicked = () => setOpen(!open);

  useEffect(() => {
    axios
      .get("https://priyamehannovels.com/api/index")
      .then((response) => {
        console.log(response.data); // Log the entire response to see its structure
        setCategories(response.data.categories); // Set the data in state

        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error); // Set error state if there's an error
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !Array.isArray(categories)) {
    return <div>Error: Failed to fetch data</div>;
  }

  return (
    <div className="sticky z-99 bg-sky-100">
      <div className="flex justify-between items-center">
        <a href="/" className="w-1/2 md:w-1/4">
          <img src={logo1} className="width-full" alt="" />
        </a>

        <div className={`md:block justify-end ${open ? "block" : "hidden"}`}>
          <ul className="categories flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {categories.map((item) => (
              <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="md:hidden absolute right-0 top-5">
          <button
            className="toggle rounded-lg flex mr-4 italic text-sm bg-clip-border p-1 bg-blue-200 border-4 border-blue-300 border-transparent"
            onClick={menuClicked}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <span className="text-blue-900 text-sm">MENU</span>

          </button>

        </div>
      </div>

<div className="flex items-center lg:order-2"></div>
      <div className="nav-login">
            <Link to="register">
              <button>Register</button>
            </Link>

            <Link to="login">
              <button>Login</button>
            </Link>
          </div>


        


      <marquee className="marq1">
        இந்த தளத்தில் எழுத விரும்புவர்கள்
        <a href="mailto:priyamehannovels@gmail.com" style={{ color: "yellow" }}>
          {" "}
          priyamehannovels@gmail.com{" "}
        </a>
        என்ற மின் அஞ்சலை தொடர்பு&nbsp;கொள்ளவும்.
      </marquee>
    </div>
  );
}

export default Header;
