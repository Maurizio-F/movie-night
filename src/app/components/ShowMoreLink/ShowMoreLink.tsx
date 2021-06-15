import React from "react";
import { Link } from "react-router-dom";
import ShowMoreLinkIcon from "../Icons/ShowMoreLinkIcon";

type LinkProps = {
  link: string;
};

function ShowMoreLink({ link }: LinkProps): JSX.Element {
  return (
    <Link to={link}>
      <ShowMoreLinkIcon />
    </Link>
  );
}

export default ShowMoreLink;
