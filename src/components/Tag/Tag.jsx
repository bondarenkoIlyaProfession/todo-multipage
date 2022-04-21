import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import uuid from "react-uuid";

import { TagItem } from "./TagItem";

export const Tag = ({ tagText, icon, className }) => {
  const classes = classNames("tags__item", className);

  return (
    <li className={classes} key={uuid()}>
      <div className="tags__item-icon">{icon}</div>
      <TagItem text={tagText} />
    </li>
  );
};

Tag.propTypes = {
  tagText: PropTypes.string,
  icon: PropTypes.element,
  className: PropTypes.string,
};

Tag.defaultProps = {
  tagText: "",
  icon: null,
  className: "",
};
