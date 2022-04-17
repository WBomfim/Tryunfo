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
      search: '',
      filterCard: [],
      filterType: 'todas',
      filterTrunfo: false,
    };
  }

  validateForm = () => {
    const informations = this.state;
    const validate = !validateInformations(informations);
    this.setState({ isSaveButtonDisabled: validate });
    this.filterCard();
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
    this.filterCard();
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

  filterTypeCard = (search) => {
    const { salvedCards, filterType } = this.state;
    if (filterType === 'todas') {
      return salvedCards.filter((card) => card.cardName.includes(search));
    }
    return salvedCards.filter((card) => card.cardName.includes(search))
      .filter((card) => card.cardRare === filterType);
  }

  filterCard = () => {
    const { search, salvedCards, filterType, filterTrunfo } = this.state;
    if (filterTrunfo) {
      const filter = salvedCards.filter((card) => card.cardTrunfo);
      this.setState({ filterCard: filter });
    } else if (search.length > 0 || filterType !== 'todas') {
      const filter = this.filterTypeCard(search);
      this.setState({ filterCard: filter });
    } else {
      this.setState({ filterCard: salvedCards });
    }
  }

  selectFilterTrunfo = () => {
    const { filterTrunfo } = this.state;
    this.setState({ filterTrunfo: !filterTrunfo }, () => this.filterCard());
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
      search,
      filterCard,
      filterType,
      filterTrunfo,
    } = this.state;

    return (
      <div className="App">
        <div className="insert-card">
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
        </div>
        <div className="saved-card">
          <div className="search-card">
            <h2>Todas as Cartas</h2>
            <h3>Filtros de Busca</h3>
            <input
              id="search"
              type="text"
              placeholder="Nome da Carta"
              name="search"
              value={ search }
              onChange={ this.handleChange }
              onKeyUp={ this.filterCard }
              disabled={ filterTrunfo }
              data-testid="name-filter"
            />
            <select
              name="filterType"
              value={ filterType }
              onChange={ this.handleChange }
              disabled={ filterTrunfo }
              data-testid="rare-filter"
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            <label htmlFor="trunfo">
              <input
                id="trunfo"
                type="checkbox"
                name="filterTrunfo"
                checked={ filterTrunfo }
                onChange={ this.selectFilterTrunfo }
                data-testid="trunfo-filter"
              />
              Super Trunfo
            </label>
            <button
              type="button"
              onClick={ this.filterCard }
            >
              Buscar
            </button>
          </div>
          { filterCard.map((card) => (
            <div key={ card.cardName } className="card-save">
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
              <button
                name={ card.cardName }
                type="button"
                onClick={ this.removeCard }
                data-testid="delete-button"
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
