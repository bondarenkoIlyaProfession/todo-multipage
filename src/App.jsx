import React, { useState } from "react";
import PropTypes from "prop-types";

import { Header, Aside, Main } from "./layout";

export const App = ({ children }) => {
  const [isAsideActive, setIsAsideActive] = useState(true);
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalName, setModalName] = useState(null);

  const toggleAside = () => setIsAsideActive(!isAsideActive);

  return (
    <>
      <Header
        isAsideActive={isAsideActive}
        toggleAside={toggleAside}
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        modalName={modalName}
        setModalName={setModalName}
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
