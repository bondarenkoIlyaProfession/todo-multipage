import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TagItem = ({ text, className }) => {
  const classes = classNames('tag__item', className);

  return (
    <div className={classes}>
      <span className="tag__item-text">{text}</span>
    </div>
  );
};

TagItem.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TagItem.defaultProps = {
  className: '',
};
