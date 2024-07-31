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

        <div className={`md:block justify-end ${open ? "block" : "hidden"}`}>
          <ul className="categories flex lg:flex-row flex-col">
            {categories.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>

        <div className="md:hidden mt-2 justify-end absolute top-0 right-0 h-16 w-16 ... ">
          <button
            className="toggle italic text-sm bg-clip-border p-1 bg-blue-200 border-4 border-blue-300 border-transparent"
            onClick={menuClicked}
          >
            <span>MENU</span>
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
