import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { className, type, name, value, onChange, datatestid } = this.props;
    return (
      <input
        className={ className }
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        data-testid={ datatestid }
      />
    );
  }
}

Input.prototype = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  datatestid: PropTypes.string.isRequired,
};

export default Input;
