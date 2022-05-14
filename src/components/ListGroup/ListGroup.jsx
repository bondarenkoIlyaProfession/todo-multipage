import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const ListGroup = ({ children, className }) => {
  const classes = classNames("list", className);

  return <ul className={classes}>{children}</ul>;
};

ListGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ListGroup.defaultProps = {
  className: "",
  children: null,
};
