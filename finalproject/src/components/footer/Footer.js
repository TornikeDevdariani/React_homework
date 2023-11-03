import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div
        className="navline"
        style={{
          marginTop: "10px",
          backgroundColor: "rgb(12, 163, 163)",
          width: "100%",
          height: "2px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      ></div>
      <div className="footerDiv">
        <div className="leftFooter">
          <ol>
            <li>
              <button>Home</button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Footer;
