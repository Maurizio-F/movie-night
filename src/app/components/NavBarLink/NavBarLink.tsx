import React from "react";
import { Link } from "react-router-dom";

type LinkProps = {
  icon: JSX.Element;
  link: string;
};

function NavBarLink({ icon, link }: LinkProps): JSX.Element {
  return <Link to={link}>{icon}</Link>;
}

export default NavBarLink;
