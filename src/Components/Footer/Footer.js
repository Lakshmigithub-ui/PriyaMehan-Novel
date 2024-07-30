import React from "react";
import "./Footer.css";

function Footer() {
  return(
  <div>
    <div className=" container-fluid text-white  flex flex-col items-center bg-blue-800 ">
      <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6 ">
        <a  href="/aboutus" className="uppercase px-3 footer">
          About Us
        </a>
        <a href="/privacy" className="uppercase px-3 footer">
          Privacy Policy
        </a>
        <a href="/T&amp;C" className="uppercase px-3 footer">
          Terms &amp; Conditions
        </a>
        <a href="/contactus" className="uppercase px-3 footer">
          Contact Us
        </a>
      </div>
      <div className="copyright">
        {" "}
        © 2023 Copyright{" "}
        <strong>
          <span>Priya Mehan Novels</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        Developed by{" "}
        <a  className="footer "href="https://asminfotech.in/" target="_blank">
          Asm Infotech
        </a>
      </div>
    </div>
  </div>
  )
}

export default Footer;
