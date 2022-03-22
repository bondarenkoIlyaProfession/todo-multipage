import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NavItems, NavItemsAdditional } from '../data/NavItems';

import { Accordion } from './Accordion';

export const Nav = ({ className }) => {
  const classes = classNames('nav', className);

  return (
    <nav className={classes}>
      <ul className='nav__list'>
        {NavItems &&
          NavItems.map(({ title, link }, index) => {
            return (
              <li className='nav__item' key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav__link nav__link-active aside__tasks-all'
                      : 'nav__link aside__tasks-all'
                  }
                  to={link}>
                  {title}
                </NavLink>
              </li>
            );
          })}
      </ul>

      <Accordion title='Additional'>
        <ul className='nav__list_additional'>
          {NavItemsAdditional &&
            NavItemsAdditional.map(({ title, link }, index) => {
              return (
                <li className='nav__item_additional' key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'nav__link_additional nav__link-active aside__tasks-personal'
                        : 'nav__link_additional aside__tasks-personal'
                    }
                    to={link}>
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
  className: '',
};
