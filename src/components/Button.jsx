import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Button = ({
  children,
  onClick,
  className,
  disabled,
  active,
  ...attrs
}) => {
  const onClickAction = (e) => (disabled ? e.preventDefault() : onClick(e));

  const classes = classNames("btn", className, { active });

  const Tag = attrs.to ? "Link" : "button";

  return (
    <Tag
      {...attrs}
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: "Default button",
  onClick: () => {},
  className: "",
  disabled: false,
  active: false,
};
