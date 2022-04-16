import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import validateInformations from './helpers/validateForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      salvedCards: [],
    };
  }

  validateForm = () => {
    if (validateInformations(this.state)) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  handleChange = (event) => {
    const { name } = event.target;
    const { cardTrunfo } = this.state;
    const value = event.target === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [name]: value === 'on'
        ? !cardTrunfo
        : value,
    }, () => this.validateForm());
  }

  checkCardTrunfo = () => {
    const { salvedCards } = this.state;
    const hasTrunfo = salvedCards.some((card) => card.cardTrunfo);
    if (hasTrunfo) {
      this.setState({ hasTrunfo: true }, () => this.validateForm());
    } else {
      this.setState({ hasTrunfo: false }, () => this.validateForm());
    }
  }

  saveCard = () => {
    const { state } = this;
    const card = {
      cardName: state.cardName,
      cardDescription: state.cardDescription,
      cardAttr1: state.cardAttr1,
      cardAttr2: state.cardAttr2,
      cardAttr3: state.cardAttr3,
      cardImage: state.cardImage,
      cardRare: state.cardRare,
      cardTrunfo: state.cardTrunfo,
    };

    this.setState((prevState) => ({
      salvedCards: [...prevState.salvedCards, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }), () => this.checkCardTrunfo());
  }

  removeCard = (event) => {
    const cardName = event.target.name;
    this.setState((prevState) => {
      const newCards = prevState.salvedCards.filter((card) => card.cardName !== cardName);
      return { salvedCards: newCards };
    }, () => this.checkCardTrunfo());
  }

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
      salvedCards,
    } = this.state;

    return (
      <div className="App">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.saveCard }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div>
          { salvedCards.map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <div>
                <button
                  name={ card.cardName }
                  type="button"
                  onClick={ this.removeCard }
                  data-testid="delete-button"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
