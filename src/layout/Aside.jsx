import React from "react";
import PropTypes from "prop-types";

import { Nav } from "../components";

export const Aside = ({ isAsideActive }) => {
  return (
    <aside className={isAsideActive ? "aside aside-active" : "aside"}>
      <div className="aside-inner">
        <Nav className="aside__nav" />
      </div>
    </aside>
  );
};

Aside.propTypes = {
  isAsideActive: PropTypes.bool,
};

Aside.defaultProps = {
  isAsideActive: true,
};
