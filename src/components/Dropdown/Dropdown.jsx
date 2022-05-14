import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Support, User } from "./Dropdowns";

import { DropdownSizes } from "../../data/DropdownSizes";

export const Dropdown = (props) => {
  const { className, isDropdownActive, dropdownName } = props;

  const classes = classNames(
    isDropdownActive ? "dropdown active" : "dropdown",
    className
  );

  const setDropdownPosition = (name) => {
    const dropdown = document.querySelector(".dropdown");
    const { top, right, bottom, left } = DropdownSizes[name];

    top ? (dropdown.style.top = `${top}px`) : null;
    right ? (dropdown.style.right = `${right}px`) : null;
    bottom ? (dropdown.style.bottom = `${bottom}px`) : null;
    left ? (dropdown.style.left = `${left}px`) : null;
  };

  const returnDropdownComponent = (name) => {
    switch (name) {
      case "support":
        setDropdownPosition(name);
        return <Support />;
      case "user":
        setDropdownPosition(name);
        return <User />;
      default:
        return null;
    }
  };

  return (
    <div className={classes}>
      <div className="dropdown__content">
        {returnDropdownComponent(dropdownName)}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  isDropdownActive: PropTypes.bool,
  dropdownName: PropTypes.string,
};

Dropdown.defaultProps = {
  className: null,
  isDropdownActive: false,
  dropdownName: null,
};
