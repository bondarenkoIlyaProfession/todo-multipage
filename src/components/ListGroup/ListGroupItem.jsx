import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const ListGroupItem = ({ children, className, disabled, active }) => {
  const classes = classNames("list__item", className, { disabled }, { active });

  return <li className={classes}>{children}</li>;
};

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

ListGroupItem.defaultProps = {
  children: null,
  className: "",
  disabled: false,
  active: false,
};
