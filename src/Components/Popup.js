import React from "react";
import RegisterForm from "../Components/Forms/RegisterFrom.js";
import "./Popup.css";

export default function Popup({ handlePopUp }) {
  return (
    <div className="registerPopUp">
      <div
        onClick={() => handlePopUp()}
        className="register-pop-up__background"
      ></div>
      <RegisterForm handlePopUp={handlePopUp} />
    </div>
  );
}
