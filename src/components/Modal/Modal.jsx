import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { CreateTask, TaskInfo } from "./Modals";

export const Modal = (props) => {
  const { className, isModalActive, setIsModalActive, modalName } = props;

  const classes = classNames(
    isModalActive ? "modal active" : "modal",
    className
  );

  const returnModalComponent = (name) => {
    switch (name) {
      case "create task":
        return <CreateTask />;
      case "task info":
        return <TaskInfo />;
      default:
        return null;
    }
  };

  return (
    <div className={classes} onClick={() => setIsModalActive(false)}>
      <div
        className={isModalActive ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {returnModalComponent(modalName)}
      </div>
    </div>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  isModalActive: PropTypes.bool,
  setIsModalActive: PropTypes.func,
  modalName: PropTypes.string,
};

Modal.defaultProps = {
  className: "",
  isModalActive: false,
  setIsModalActive: () => {},
  modalName: null,
};
