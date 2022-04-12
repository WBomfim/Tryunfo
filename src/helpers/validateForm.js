const sumValidate = (state) => {
  const { cardAttr1, cardAttr2, cardAttr3 } = state;
  const maxSum = 210;
  if (cardAttr1 + cardAttr2 + cardAttr3 <= maxSum) {
    return true;
  }
  return false;
};

const maxPoints = (state) => {
  const { cardAttr1, cardAttr2, cardAttr3 } = state;
  const max = 90;
  if (cardAttr1 <= max && cardAttr2 <= max && cardAttr3 <= max) {
    return true;
  }
  return false;
};

const validateFilling = (state) => {
  const { cardName, cardDescription, cardImage, cardRare } = state;
  if (!cardName && !cardDescription && !cardImage && !cardRare) {
    return false;
  }
  return true;
};

const validateForm = (state) => {
  if (validateFilling(state) && maxPoints(state) && sumValidate(state)) {
    return true;
  }
  return false;
};

export default validateForm;
