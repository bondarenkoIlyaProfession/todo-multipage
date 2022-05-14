import React from "react";

import { ListGroup, ListGroupItem } from "../../ListGroup";

import { DropdownUserItems } from "../../../data/DropdownItems";

export const User = () => {
  return (
    <ListGroup>
      {DropdownUserItems.map(({ title, leftIcon }) => (
        <ListGroupItem>
          {leftIcon && <div className="list__item-icon">{leftIcon}</div>}
          <div className="list__item-title">{title}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
