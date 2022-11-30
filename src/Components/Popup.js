import React from "react";
import RegisterForm from "../Components/Forms/RegisterFrom.js";
import "./Popup.css";

export default function Popup({ handlePopUp, children }) {
  return (
    <div className="registerPopUp ">
      <div
        onClick={() => handlePopUp()}
        className="register-pop-up__background"
      ></div>
      {children}
    </div>
  );
}
