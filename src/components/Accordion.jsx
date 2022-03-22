import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FiChevronDown } from 'react-icons/fi';

export const Accordion = ({ children, title, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const classes = classNames('accordion', className);

  return (
    <div className={classes}>
      <div className='accordion__title' onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>

        <div className='accordion__toggle-inner'>
          <FiChevronDown className='accordion__toggle' aria-expanded={isOpen} />
        </div>
      </div>

      <div className='accordion__content' aria-expanded={!isOpen}>
        {children}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

Accordion.defaultProps = {
  title: 'Default Accordion',
  className: '',
};
