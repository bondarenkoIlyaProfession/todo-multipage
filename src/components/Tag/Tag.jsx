import React from 'react';
import PropTypes from 'prop-types';

import { TagItem } from './TagItem';

export const Tag = ({ tagText, icon }) => {
  return (
    <li className="tags__item tasks__tags-item">
      <div className="tags__item-icon tasks__tags-icon">{icon}</div>
      <TagItem text={tagText} />
    </li>
  );
};

Tag.propTypes = {
  tagText: PropTypes.string,
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
};

Tag.defaultProps = {
  tagText: '',
  icon: null,
  onClick: () => {},
};
