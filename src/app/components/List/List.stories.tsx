import React from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import ShareIcon from "../Icons/ShareIcon";

import List from "./List";

export default {
  title: "Component/List",
  component: List,
};

export const ListElement = (): JSX.Element => {
  return (
    <List
      headline="Filmabend 1"
      date="21.05.2021"
      shareButton={<ShareIcon />}
      deleteButton={<DeleteIcon />}
    />
  );
};
