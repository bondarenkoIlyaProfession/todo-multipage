import React from 'react';

import { Nav } from '../components';

export const Aside = ({ isAside }) => {
  return (
    <aside className={isAside ? 'aside aside-active' : 'aside'}>
      <div className='aside-inner'>
        <Nav className='aside__nav' />
      </div>
    </aside>
  );
};
