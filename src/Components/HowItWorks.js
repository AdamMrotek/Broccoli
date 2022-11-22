import "./HowItWorks.css";
import React from "react";
// import PrimaryButton from "./Buttons/Buttons.js";
import SideCard from "./SideCard.js";
let howItWorksContent = [
  {
    title: "Choose the recipies",
    description:
      "from the library of hundreds of recipies that are great and awsome. Thanks to our AI taste generator you can get furhter !",
    icon: "/svgIcons/undraw_chef_cu-0-r.svg",
  },
  {
    title: "Create your list",
    description:
      "from the library of hundreds of recipies that are great and awsome. Thanks to our AI taste generator you can get furhter !",
    icon: "/svgIcons/undraw_healthy_options_sdo3 (1).svg",
  },
  {
    title: "Go and get it!",
    description:
      "from the library of hundreds of recipies that are great and awsome. Thanks to our AI taste generator you can get furhter !",
    icon: "/svgIcons/undraw_shopping_app_flsj.svg",
  },
];
export default function HowItWorks({ handlePopUp }) {
  return (
    <div className="how-it-works">
      <h2 className="heading-secondary">How it works ?</h2>
      <div className="side-cards">
        {howItWorksContent.map((p, i) => {
          return <SideCard key={i} cardKey={i} cardContent={p} />;
        })}
      </div>

      <button onClick={() => handlePopUp()} className="btn margin-medium">
        Register
      </button>

      <img
        className="how-it-works__img"
        src="/broccoli-cut.jpg"
        alt="halved broccoli"
      ></img>
    </div>
  );
}
