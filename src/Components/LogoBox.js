import "./LogoBox.css";
import React from "react";

export default function LogoBox() {
  return (
    <div className="logo-box">
      <img src="/svgIcons/logo.svg" alt="chief" className="logo-icon" />

      <div className="logo-box__text-box">
        <h3>
          <span className="logo-text--primary">Broccoli</span>
          <span className="logo-text--secondary"> Groceries</span>
        </h3>
      </div>
    </div>
  );
}
