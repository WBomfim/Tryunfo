import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="Form_page">
        <h1>Adicionar nova carta</h1>
        <form className="Form">
          <Input
            lableText="Nome:"
            id="name"
            className="input_name"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            datatestid="name-input"
          />
          <Input
            lableText="Descrição:"
            id="descrição"
            className="input_textArea"
            type="textarea"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            datatestid="description-input"
          />
          <Input
            lableText="Atributo 1:"
            id="atributo-1"
            className="input_atributo"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            datatestid="attr1-input"
          />
          <Input
            lableText="Atributo 2:"
            id="atributo-2"
            className="input_atributo"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            datatestid="attr2-input"
          />
          <Input
            lableText="Atributo 3:"
            id="atributo-3"
            className="input_atributo"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            datatestid="attr3-input"
          />
          <Input
            lableText="Imagem:"
            id="imagem"
            className="input_imagem"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            datatestid="image-input"
          />
          <label htmlFor="raridade">
            Raridade:
            <select
              id="raridade"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          {
            hasTrunfo
              ? <span>Você já tem um Super Trunfo em seu baralho</span>
              : (
                <label htmlFor="super-trybe-trunfo">
                  <input
                    id="super-trybe-trunfo"
                    type="checkbox"
                    name="cardTrunfo"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                    data-testid="trunfo-input"
                  />
                  Super Trybe Trunfo
                </label>
              )
          }
          <button
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
