import React from 'react';

import {
  BsHouseDoor,
  BsReverseLayoutTextWindowReverse,
  BsPlusLg,
  BsFillPersonFill,
  BsSearch,
} from 'react-icons/bs';

import { Input } from '../components';

export const Header = ({ toggleAside }) => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-inner'>
          <div className='header-left'>
            <div className='header__action header__hamburger-menu' onClick={toggleAside}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className='header__action header__house'>
              <BsHouseDoor size='20px' title='home page' />
            </div>

            <form className='header__form'>
              <BsSearch className='header__search-icon' size='16px' />
              <Input
                type='text'
                id='header__search'
                className='header__search'
                placeholder='Search'
              />
            </form>
          </div>

          <div className='header-center'>
            <div className='header__action header__logo'>
              <BsReverseLayoutTextWindowReverse size='20px' title='web-site logotype' />
            </div>
          </div>

          <div className='header-right'>
            <div className='header__action header__add-task'>
              <BsPlusLg size='16px' title='add task' />
            </div>
            <div className='header__action header__user'>
              <BsFillPersonFill size='20px' title='user opportunities' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
