import React from "react";

type CardProps = {
  imgSrc: string;
  movieName: string;
};

function BigMovieCard({ imgSrc, movieName }: CardProps): JSX.Element {
  return (
    <div>
      <img src={imgSrc} alt="Movie Poster" />
      <h1>{movieName}</h1>
    </div>
  );
}

export default BigMovieCard;
