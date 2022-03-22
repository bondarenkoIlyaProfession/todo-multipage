import React, { useState } from 'react';

import { Header, Aside, Main } from './layout';

export const App = ({ children }) => {
  const [isAside, setIsAside] = useState(true);

  const toggleAside = () => {
    isAside ? setIsAside(false) : setIsAside(true);
  };

  return (
    <>
      <Header toggleAside={toggleAside} />
      <Aside isAside={isAside} />

      <div className={isAside ? 'content' : 'content content-only'}>
        <Main key='main'>{children}</Main>
      </div>
    </>
  );
};
