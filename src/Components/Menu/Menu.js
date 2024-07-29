import { Link } from "react-router-dom";
import navstyle from "./navstyle.css";

function Menu() {
  return (
    <>
      <nav className="nav">
        {/* <div className="navbar-right">
          <img src={logo1} alt="" style={{ width: "50px", height: "50px" }} />
        </div> */}

        {/* <div className="navbar-middle">
          <Link className="nav-color" style={{ textDecoration: 'none' }} to="Read">
            Read
          </Link>
        </div> */}
        <div className="navbar-middle">
          <Link
            className="nav-color"
            style={{ textDecoration: "none" }}
            to="/login"
          >
            Login
          </Link>
        </div>

        <div className="navbar-right">
          <div className="search">
            <input type="text" placeholder="Search" />
            {/* <img
              src={search}
              alt=""
              style={{ width: "20px", height: "20px" }}
            /> */}
          </div>
          {/* <img src={notification} style={{ width: "40px", height: "40px" }} />
          <img src={profile} style={{ width: "40px", height: "40px" }} /> */}
        </div>
      </nav>
    </>
  );
}

export default Menu;
