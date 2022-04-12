const validateFillingNumber = (state) => {
  const { cardAttr1, cardAttr2, cardAttr3 } = state;
  if (!cardAttr1 || !cardAttr2 || !cardAttr3) {
    return false;
  }
  return true;
};

const validadeNegativeNumber = (state) => {
  const { cardAttr1, cardAttr2, cardAttr3 } = state;
  const attr1 = Number(cardAttr1);
  const attr2 = Number(cardAttr2);
  const attr3 = Number(cardAttr3);
  if (attr1 < 0 || attr2 < 0 || attr3 < 0) {
    return false;
  }
  return true;
};

const sumValidate = (state) => {
  const { cardAttr1, cardAttr2, cardAttr3 } = state;
  const negativeNumber = validadeNegativeNumber(state);
  const attr1 = Number(cardAttr1);
  const attr2 = Number(cardAttr2);
  const attr3 = Number(cardAttr3);
  const maxSum = 210;
  if (attr1 + attr2 + attr3 <= maxSum && negativeNumber) {
    return true;
  }
  return false;
};

const maxPoints = (state) => {
  const { cardAttr1, cardAttr2, cardAttr3 } = state;
  const attr1 = Number(cardAttr1);
  const attr2 = Number(cardAttr2);
  const attr3 = Number(cardAttr3);
  const max = 90;
  if (attr1 <= max && attr2 <= max && attr3 <= max) {
    return true;
  }
  return false;
};

const validateFilling = (state) => {
  const { cardName, cardDescription, cardImage, cardRare } = state;
  const validateNumber = validateFillingNumber(state);
  if (!cardName || !cardDescription || !cardImage || !cardRare || !validateNumber) {
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
