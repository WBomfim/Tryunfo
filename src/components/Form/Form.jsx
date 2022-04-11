import React, { Component } from 'react';
import Input from '../Input/Input';

class Form extends Component {
  aguardando() {
    console.log('test');
  }

  render() {
    return (
      <div className="Form_page">
        <h1>Adicionar nova carta</h1>
        <form className="Form">
          <Input
            lableText="Nome:"
            id="name"
            className="input_name"
            type="text"
            name="name"
            value="aguardando"
            onChange={ this.aguardando }
            datatestid="name-input"
          />
          <Input
            lableText="Descrição:"
            id="descrição"
            className="input_textArea"
            type="textarea"
            name="descricao"
            value="aguardando"
            onChange={ this.aguardando }
            datatestid="description-input"
          />
          <Input
            lableText="Atributo 1:"
            id="atributo-1"
            className="input_atributo"
            type="number"
            name="atrubito1"
            value="aguardando"
            onChange={ this.aguardando }
            datatestid="attr1-input"
          />
          <Input
            lableText="Atributo 2:"
            id="atributo-2"
            className="input_atributo"
            type="number"
            name="atrubito2"
            value="aguardando"
            onChange={ this.aguardando }
            datatestid="attr2-input"
          />
          <Input
            lableText="Atributo 3:"
            id="atributo-3"
            className="input_atributo"
            type="number"
            name="atrubito3"
            value="aguardando"
            onChange={ this.aguardando }
            datatestid="attr3-input"
          />
          <Input
            lableText="Imagem:"
            id="imagem"
            className="input_imagem"
            type="text"
            name="imagem"
            value="aguardando"
            onChange={ this.aguardando }
            datatestid="image-input"
          />
          <label htmlFor="raridade">
            Raridade:
            <select name="raridade" id="raridade" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <Input
            lableText="Super Trybe Trunfo"
            id="super-trybe-trunfo"
            className="input_checkbox"
            type="checkbox"
            name="super-trybe-trunfo"
            value="aguardando"
            onChange={ this.aguardando }
            datatestid="trunfo-input"
          />
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
