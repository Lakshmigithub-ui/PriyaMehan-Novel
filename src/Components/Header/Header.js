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
    <div className="whole-header">
      <div className="header">
        <a href="#home" className="w-1/2 md:w-1/4">
          <img src={logo1} className="width-full" alt="" />
        </a>

        <div className="md:hidden mt-2 justify-end ">
          <button onClick={menuClicked}>
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
          </button>
        </div>

        <div
          className={`md:block justify-end ${open ? "block" : "hidden"}`}
        >
          <ul className="categories">
            {categories.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div>
      <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
      </div> */}

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
