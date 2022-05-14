import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Button = ({
  children,
  onClick,
  className,
  disabled,
  active,
  outline,
  ...attrs
}) => {
  const onClickAction = (e) => (disabled ? e.preventDefault() : onClick(e));

  const classes = classNames("btn", className, { active }, { outline });

  return (
    <button
      {...attrs}
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      type="button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  children: "Default button",
  onClick: () => {},
  className: "",
  disabled: false,
  active: false,
  outline: false,
};
