import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      lableText,
      id,
      className,
      type,
      name,
      value,
      onChange,
      datatestid,
    } = this.props;

    return (
      <label htmlFor={ id }>
        { lableText }
        <input
          id={ id }
          className={ className }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ datatestid }
        />
      </label>
    );
  }
}

Input.propTypes = {
  lableText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  datatestid: PropTypes.string.isRequired,
};

export default Input;
