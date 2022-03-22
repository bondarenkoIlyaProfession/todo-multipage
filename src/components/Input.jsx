import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';

export const Input = ({ id, className, label, error, valid, ...attrs }) => {
  const classes = classNames(
    'input',
    className,
    { error },
    { valid },
  )

  return (
    <div className="input-inner">
      {label &&
        <label className="input__label" htmlFor={id}>{label}</label>
      }
      {attrs.required &&
        <span className="input-required">Required</span>
      }
      <input
        {...attrs}
        name={id}
        id={id}
        className={classes}
      />
      {error &&
        <span className="input-error">{error}</span>
      }
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  valid: PropTypes.bool,
};

Input.defaultProps = {
  className: '',
  label: '',
  error: '',
  valid: false,
};