import React from "react";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
import classNames from "classnames";
import uuid from "react-uuid";

import { NavItems, NavItemsAdditional } from "../data/NavItems";

import { Accordion } from "./Accordion";

export const Nav = ({ className }) => {
  const classes = classNames("nav", className);

  return (
    <nav className={classes}>
      <ul className="nav__list">
        {NavItems &&
          NavItems.map(({ title, link }) => {
            return (
              <li className="nav__item" key={uuid()}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link-active aside__tasks-all"
                      : "nav__link aside__tasks-all"
                  }
                  to={link}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
      </ul>

      <Accordion title="Additional">
        <ul className="nav__list-additional">
          {NavItemsAdditional &&
            NavItemsAdditional.map(({ title, link }) => {
              return (
                <li className="nav__item-additional" key={uuid()}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav__link-additional nav__link-active aside__tasks-personal"
                        : "nav__link-additional aside__tasks-personal"
                    }
                    to={link}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </Accordion>
    </nav>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};

Nav.defaultProps = {
  className: "",
};
