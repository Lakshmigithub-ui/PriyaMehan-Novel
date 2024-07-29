import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import logo1 from "../../Assets/logo1.png";
import "./Header.css";

function Header() {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div>
      <div className="header">
        <a href="#home">
          <img src={logo1} style={{ width: "180px" }} alt="" />
        </a>

        <ul className="categories">
          {categories.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
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
