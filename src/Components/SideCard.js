import "./SideCard.css";
import React from "react";
import PrimaryButton from "./Buttons/Buttons.js";
import styled from "styled-components";

export default function SideCard({ cardKey, cardContent }) {
  const { title, description, icon } = cardContent;

  console.log(icon);
  console.log(cardContent);
  return (
    <div className="side-card" key={cardKey}>
      <img src={icon} alt="chief" className="side-card__icon" />
      <div className="side-card__text-containter">
        <h3 className="heading-tertiary">{title}</h3>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
}
