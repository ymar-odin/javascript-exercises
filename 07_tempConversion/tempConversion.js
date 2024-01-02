const convertToCelsius = function(temp) {
  let convTemp = (temp - 32) * (5 / 9);
  return +convTemp.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  let convTemp = (temp * (9/5)) + 32;
  return +convTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
