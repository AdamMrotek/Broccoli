import "./HowItWorks.css";
import React from "react";

export default function HowItWorks({ handlePopUp }) {
  return (
    <div className="how-it-works">
      <h2 className="heading-secondary">How it works ?</h2>

      <div className="header__how-it-works__cards">
        <div className="header__how-it-works__card">
          <img
            src="/svgIcons/undraw_chef_cu-0-r.svg"
            alt="chief"
            className="card-icon"
          />
          <h3 className="heading-tertiary">Choose your favorite recipies</h3>
          <p className="paragraph">from the library of hundreds of recipies</p>
        </div>
        <div className="header__how-it-works__card lower-card">
          <img
            src="/svgIcons/undraw_healthy_options_sdo3 (1).svg"
            alt="chief"
            className="card-icon"
          />
          <h3 className="heading-tertiary">Create you shopping list</h3>
          <p className="paragraph">approve you groceries</p>
        </div>
        <div className="header__how-it-works__card">
          <img
            src="/svgIcons/undraw_shopping_app_flsj.svg"
            alt="chief"
            className="card-icon"
          />
          <h3 className="heading-tertiary">Go Shopping or order online</h3>
          <p className="paragraph">
            chcek you shopping list on your mobile devices
          </p>
        </div>
      </div>
      <label htmlFor="email">
        <button onClick={() => handlePopUp()} className="btn margin-medium">
          Register
        </button>
      </label>
    </div>
  );
}
