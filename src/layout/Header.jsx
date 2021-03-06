import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  BsArrowLeftCircleFill,
  BsHouseDoorFill,
  BsPlusLg,
  BsPersonFill,
  BsSearch,
  BsQuestionCircleFill,
} from "react-icons/bs";

import { Input, Dropdown, Modal } from "../components";

export const Header = (props) => {
  const {
    isAsideActive,
    toggleAside,
    setIsModalActive,
    setModalName,
    isDropdownActive,
    setIsDropdownActive,
    setDropdownName,
  } = props;

  const openCreateTaskModal = () => {
    setIsModalActive(true);
    setModalName("create task");
  };

  const openSupportDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
    setDropdownName("support");
  };

  const openUserDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
    setDropdownName("user");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-left">
            <div
              className={
                isAsideActive
                  ? "header__action header__hamburger-menu"
                  : "header__action header__hamburger-menu rotated"
              }
              onClick={toggleAside}
            >
              <BsArrowLeftCircleFill size="20px" />
            </div>

            <Link to="/" className="header__action header__house">
              <BsHouseDoorFill size="20px" title="Home Page" />
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
            <div
              className="header__action header__add-task"
              onClick={openCreateTaskModal}
            >
              <BsPlusLg size="16px" title="Add a task" />
            </div>
            <div
              className="header__action header__support"
              onClick={openSupportDropdown}
            >
              <BsQuestionCircleFill size="20px" title="Support" />
            </div>
            <div
              className="header__action header__user"
              onClick={openUserDropdown}
            >
              <BsPersonFill size="20px" title="User opportunities" />
            </div>
          </div>
        </div>
      </div>

      <Modal {...props} />
      <Dropdown {...props} />
    </header>
  );
};

Header.propTypes = {
  isAsideActive: PropTypes.bool,
  toggleAside: PropTypes.func,
  setIsModalActive: PropTypes.func,
  setModalName: PropTypes.func,
  isDropdownActive: PropTypes.bool,
  setIsDropdownActive: PropTypes.func,
  setDropdownName: PropTypes.func,
};

Header.defaultProps = {
  isAsideActive: true,
  toggleAside: () => {},
  setIsModalActive: () => {},
  setModalName: () => {},
  isDropdownActive: false,
  setIsDropdownActive: () => {},
  setDropdownName: () => {},
};
