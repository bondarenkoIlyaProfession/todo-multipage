import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import {
  BsHouseDoor,
  BsPlusLg,
  BsFillPersonFill,
  BsSearch,
} from "react-icons/bs";

import { Input } from "../components";

export const Header = ({ toggleAside }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-left">
            <div
              className="header__action header__hamburger-menu"
              onClick={toggleAside}
              aria-hidden="true"
            >
              <span className="header__hamburger-menu-bar" />
              <span className="header__hamburger-menu-bar" />
              <span className="header__hamburger-menu-bar" />
            </div>

            <Link to="/" className="header__action header__house">
              <BsHouseDoor size="20px" title="Home Page" />
            </Link>

            <form className="header__form">
              <BsSearch
                className="header__search-icon"
                size="16px"
                title="Search"
              />
              <Input
                type="text"
                id="header__search"
                className="header__search"
                placeholder="Search"
              />
            </form>
          </div>

          <div className="header-right">
            <div className="header__action header__add-task">
              <BsPlusLg size="16px" title="Add a task" />
            </div>
            <div className="header__action header__user">
              <BsFillPersonFill size="20px" title="User opportunities" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  toggleAside: PropTypes.func,
};

Header.defaultProps = {
  toggleAside: "",
};
