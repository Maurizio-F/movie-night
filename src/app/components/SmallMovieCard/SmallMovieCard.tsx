import React from "react";

type CardProps = {
  imgSrc: string;
  movieName: string;
  genres: string[];
  runtime: number;
};

function SmallMovieCard({
  imgSrc,
  movieName,
  genres,
  runtime,
}: CardProps): JSX.Element {
  return (
    <div>
      <img src={imgSrc} />
      <h2>{movieName}</h2>
      <span>{genres}</span>
      <span>{runtime}</span>
    </div>
  );
}

export default SmallMovieCard;
