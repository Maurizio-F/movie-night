import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarLink.module.css";

type LinkProps = {
  icon: JSX.Element | React.SVGProps<SVGSVGElement>;
  link: string;
};

function NavBarLink({ icon, link }: LinkProps): JSX.Element {
  return (
    <Link className={styles.navBarLink} to={link}>
      {icon}
    </Link>
  );
}

export default NavBarLink;
