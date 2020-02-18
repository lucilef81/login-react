import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, type, placeholder, handleChange }) => (
  <>
    {type === 'submit' ? (
      <input
        className="button button-success"
        type={type}
        value={placeholder}
      />
    ) : (
      <>
        <label htmlFor={name}>{placeholder}</label>
        <input
          className="input"
          id={name}
          type={type}
          name={name}
          onChange={handleChange}
        />
      </>
    )}
  </>
);

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
};

Input.defaultProps = {
  name: '',
  type: 'text',
  placeholder: '',
  handleChange: () => {},
};

export default Input;
