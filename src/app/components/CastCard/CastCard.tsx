import React from "react";

type CastCardProps = {
  imgSrc: string;
  name: string;
  filmName: string;
};

function CastCard({ imgSrc, name, filmName }: CastCardProps): JSX.Element {
  return (
    <div>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>{filmName}</h2>
      </div>
    </div>
  );
}

export default CastCard;
