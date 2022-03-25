import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { FiPlusCircle } from "react-icons/fi";

export const AddTask = ({ text, className, withIcon }) => {
  const classes = classNames("add-task", className);

  return (
    <div className={classes}>
      {withIcon && <FiPlusCircle className="add-task-icon" size="20px" />}
      {text}
    </div>
  );
};

AddTask.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  withIcon: PropTypes.bool,
};

AddTask.defaultProps = {
  text: "Add task",
  className: "",
  withIcon: true,
};
