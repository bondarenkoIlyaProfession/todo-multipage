import React from "react";

import { ListGroup, ListGroupItem } from "../../ListGroup";

import { DropdownSupportItems } from "../../../data/DropdownItems";

export const Support = () => {
  return (
    <ListGroup>
      {DropdownSupportItems.map(({ title, leftIcon }) => (
        <ListGroupItem>
          {leftIcon && <div className="list__item-icon">{leftIcon}</div>}
          <div className="list__item-title">{title}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
