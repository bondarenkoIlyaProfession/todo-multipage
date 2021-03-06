import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Header, Aside, Main } from "./layout";

export const App = ({ children }) => {
  const [isAsideActive, setIsAsideActive] = useState(
    localStorage.getItem("is-aside-active") === "true"
  );
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalName, setModalName] = useState(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [dropdownName, setDropdownName] = useState(null);

  const toggleAside = () => setIsAsideActive(!isAsideActive);

  useEffect(() => {
    localStorage.setItem("is-aside-active", isAsideActive);
  }, [isAsideActive]);

  return (
    <>
      <Header
        isAsideActive={isAsideActive}
        toggleAside={toggleAside}
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        modalName={modalName}
        setModalName={setModalName}
        isDropdownActive={isDropdownActive}
        setIsDropdownActive={setIsDropdownActive}
        dropdownName={dropdownName}
        setDropdownName={setDropdownName}
      />
      <Aside isAsideActive={isAsideActive} />

      <div className={isAsideActive ? "content" : "content content-only"}>
        <Main>{children}</Main>
      </div>
    </>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};
