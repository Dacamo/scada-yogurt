import React from "react";

const IngredientContainer = ({ ingredientName }) => (
  <>
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 60 60"
    >
      <g>
        <path
          d="M9.5,0v46v12.567c0,0.79,0.643,1.433,1.433,1.433h38.135c0.79,0,1.433-0.643,1.433-1.433V46V0H9.5z M48.5,58h-37V48h37V58z
      M11.5,46V2h37v44H11.5z"
        />
        <path d="M27.5,54h5c0.553,0,1-0.447,1-1s-0.447-1-1-1h-5c-0.553,0-1,0.447-1,1S26.947,54,27.5,54z" />
        <path d="M14.5,44h18V33h-18V44z M16.5,35h14v7h-14V35z" />
        <path d="M17.5,41h5v-5h-5V41z M19.5,38h1v1h-1V38z" />
        <path d="M24.5,41h5v-5h-5V41z M26.5,38h1v1h-1V38z" />
        <path
          d="M40.5,34c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S43.257,34,40.5,34z M40.5,42c-1.654,0-3-1.346-3-3s1.346-3,3-3
      c0.462,0,0.894,0.114,1.285,0.301l-1.992,1.992l1.414,1.414l1.992-1.992C43.387,38.106,43.5,38.538,43.5,39
      C43.5,40.654,42.154,42,40.5,42z"
        />
      </g>
    </svg>
    <h1>{ingredientName}</h1>
  </>
);

export default IngredientContainer;
