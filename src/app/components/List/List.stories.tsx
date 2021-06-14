import React from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import ShareIcon from "../Icons/ShareIcon";
import List from "./List";

export default {
  title: "Component/List",
  component: List,
};

export const ListElementWithShare = (): JSX.Element => {
  return (
    <div>
      <List
        headline="Filmabend 1"
        date="21.05.2021"
        shareButton={<ShareIcon />}
        deleteButton={<DeleteIcon />}
      />
      <List
        headline="Filmabend 2"
        date="21.05.2021"
        shareButton={<ShareIcon />}
        deleteButton={<DeleteIcon />}
      />
      <List
        headline="Filmabend 3"
        date="21.05.2021"
        shareButton={<ShareIcon />}
        deleteButton={<DeleteIcon />}
      />
      <List
        headline="Filmabend 4"
        date="21.05.2021"
        shareButton={<ShareIcon />}
        deleteButton={<DeleteIcon />}
      />
    </div>
  );
};

export const ListElementWithoutShare = (): JSX.Element => {
  return (
    <div>
      <List
        headline="Filmabend 1"
        date="21.05.2021"
        deleteButton={<DeleteIcon />}
      />
      <List
        headline="Filmabend 2"
        date="21.05.2021"
        deleteButton={<DeleteIcon />}
      />
      <List
        headline="Filmabend 2"
        date="21.05.2021"
        deleteButton={<DeleteIcon />}
      />
      <List
        headline="Filmabend 2"
        date="21.05.2021"
        deleteButton={<DeleteIcon />}
      />
    </div>
  );
};
