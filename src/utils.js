export const composeHeader = (pair, prefix) => {
  const pairSplit = pair.split(' ');
  return `${prefix} ${pairSplit[0]}`.trim();
};

export const composeValue = value => {
  const strValue = value.toString().padEnd(7, '0');
  const first = strValue.substr(0, 4);
  const second = strValue.substr(4, 2);
  const third = strValue.substr(6, 1);

  return { first, second, third };
};

export const randomizer = (inputValue, amount) => {
  const { integerValue, exponent } = floatToInteger(inputValue);
  const maxValue = integerValue + integerValue * amount;
  const minValue = integerValue - integerValue * amount;
  const randomValue = Math.round(Math.random() * (maxValue - minValue) + minValue);
  return randomValue / Math.pow(10, exponent);
};

export const floatToInteger = inputValue => {
  const [head, tail = []] = inputValue.toString().split('.');
  const exponent = tail.length;
  return {
    integerValue: Math.round(inputValue * Math.pow(10, exponent)),
    exponent
  };
};
