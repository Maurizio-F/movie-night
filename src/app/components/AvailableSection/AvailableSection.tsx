import React from "react";
import AvailableSectionIcon from "../Icons/AvailableSectionIcon";

type AvailableSectionProps = {
  imgSrc: string;
};

function AvailableSection({ imgSrc }: AvailableSectionProps): JSX.Element {
  return (
    <div>
      <div>
        <AvailableSectionIcon />
      </div>
      <img src={imgSrc} />;
      <img src={imgSrc} />;
      <img src={imgSrc} />;
    </div>
  );
}

export default AvailableSection;
