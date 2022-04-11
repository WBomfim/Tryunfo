import React, { Component } from 'react';
import Input from '../Input/Input';

class Form extends Component {
  render() {
    return (
      <form className="Form">
        <Input
          lableText="Nome:"
          id="name"
          className="input_name"
          type="text"
          name="name"
          value=""
          onChange=""
          datatestid="name-input"
        />
      </form>
    );
  }
}

export default Form;
