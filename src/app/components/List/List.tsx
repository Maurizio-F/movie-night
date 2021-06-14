import React from "react";

type ListProps = {
  headline: string;
  date: string;
  shareButton?: React.SVGProps<SVGSVGElement>;
  deleteButton: React.SVGProps<SVGSVGElement>;
};

function List({
  headline,
  date,
  shareButton,
  deleteButton,
}: ListProps): JSX.Element {
  return (
    <div>
      <p>{headline}</p>
      <p>{date}</p>
      <button>{shareButton}</button>
      <button>{deleteButton}</button>
    </div>
  );
}

export default List;
