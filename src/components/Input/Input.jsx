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

Input.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  datatestid: PropTypes.string.isRequired,
};

export default Input;
