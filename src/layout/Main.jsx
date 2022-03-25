import React from "react";
import PropTypes from "prop-types";

export const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
