import React from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import ShareIcon from "../Icons/ShareIcon";
import ListElement from "./ListElement";

export default {
  title: "Component/List",
  component: ListElement,
};

export const ListElementWithShare = (): JSX.Element => {
  return (
    <div>
      <ListElement
        headline="Filmabend 1"
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
      <ListElement
        headline="Filmabend 1"
        date="21.05.2021"
        deleteButton={<DeleteIcon />}
      />
    </div>
  );
};
