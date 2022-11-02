import "./LogoBox.css";
import React from "react";

export default function LogoBox() {
  let offsetColors = [
    [0, "#fff33b"],
    [1, "#e93e3a"],
  ];
  return (
    <div className="logo-box">
      <svg
        className="logo-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 424 456"
      >
        <linearGradient
          id="a"
          x1="0"
          x2="424"
          y1="0"
          y2="424"
          gradientUnits="userSpaceOnUse"
        >
          {offsetColors.map((p) => (
            <stop offset={p[0]} stopColor={p[1]} />
          ))}
        </linearGradient>

        <path
          d="M189 66c20-8 38-6 56 5 3 2 6 1 9 0 9-4 18-8 28-10 39-10 80 13 91 51 4 14 7 27 6 42 0 10-2 20-8 28-1 3-1 4 1 6 14 22 22 45 19 71-2 18-7 35-23 47-7 6-16 9-25 10l-12 1c-8 0-16 3-23 8-10 7-21 12-34 12-10 0-19-2-27-8-2-2-4-2-7-1a90 90 0 0 0-56 56l-7 24c-2 7-5 13-9 18-11 12-28 13-42 2-11-7-20-17-30-26l-13-15c-8-10-7-18 5-24 9-6 18-11 26-20 7-9 12-19 13-30 2-22 0-44-4-66l-5-13-2-2a74 74 0 0 1-36-46c-5-16-6-33-2-49 5-16 16-27 29-37 15-11 32-16 52-13l5-2c7-8 15-15 25-19m-42 158-1 12 9 3 28-1c12 0 18 5 17 18l-1 12c1 8 6 11 14 9l13-5c6-1 10 0 13 6l6 12c7 20 32 31 53 23 12-5 24-8 37-9 10-1 21-5 28-14 6-9 9-19 10-30 1-20-5-39-14-56-3-5-5-9-6-14-2-7-1-13 5-17 5-4 8-10 9-16l1-20c-2-20-11-36-30-44-11-5-22-8-34-7l-40 6c-11 2-20 2-31-4-6-3-14-3-21-3-12 1-23 7-31 16-9 9-18 10-29 7-24-7-51 7-59 29-3 9-3 18-1 28 3 17 9 32 24 42 6 5 14 6 21 9 4 1 8 3 10 8m23 151c10-31 26-58 57-72l-2-5-17 2-9 9-27 15c-8 4-15 1-17-8l-1-8 1-45-12-4v52c-1 25-12 45-34 58l-16 9c14 13 29 23 46 30 11 4 18 0 23-10l8-23m3-108-3 35 20-10-10-29-7 4z"
          style={{ fill: "url('#a')" }}
        />
      </svg>
      <div className="logo-box__text-box">
        <h3>
          <span className="logo-text--primary">Broccoli</span>
          <span className="logo-text--secondary"> Groceries</span>
        </h3>
      </div>
    </div>
  );
}
