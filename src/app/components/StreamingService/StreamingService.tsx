import React from "react";

type AvailableSectionProps = {
  imgSrc: string;
};

function AvailableSection({ imgSrc }: AvailableSectionProps): JSX.Element {
  return (
    <div>
      <img src={imgSrc} />
    </div>
  );
}

export default AvailableSection;
