import React from "react";

function MoreButtonIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="54.399"
      viewBox="0 0 60 54.399"
    >
      <g data-name="Mehr Button" transform="translate(0 1)">
        <path
          d="M34.8,0,17.4,17.4,0,0"
          transform="translate(46.297 17.399) rotate(180)"
          fill="none"
          stroke="var(--tertiary-color)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <text
          transform="translate(0 24.399)"
          fill="var(--tertiary-color)"
          font-size="22"
          font-family="Roboto-Regular, Roboto"
          letter-spacing="0.1em"
        >
          <tspan x="0" y="23">
            Mehr
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default MoreButtonIcon;
