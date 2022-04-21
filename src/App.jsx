import React, { useState } from "react";
import PropTypes from "prop-types";

import { Header, Aside, Main } from "./layout";

export const App = ({ children }) => {
  const [isAside, setIsAside] = useState(true);

  const toggleAside = () => setIsAside(!isAside);

  return (
    <>
      <Header toggleAside={toggleAside} />
      <Aside isAside={isAside} />

      <div className={isAside ? "content" : "content content-only"}>
        <Main>{children}</Main>
      </div>
    </>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};
