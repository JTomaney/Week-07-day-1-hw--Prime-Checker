const PubSub = require(`../helpers/pub_sub.js`);

const ResultView = function () {

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe(`PrimeChecker:ResultCalculated`, (event) => {
    const isAPrime = event.detail;
    this.displayResult(isAPrime);
  })
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector(`#result`);
  if (result) {
    resultElement.textContent = `This is a prime number`
  }
  else {
    resultElement.textContent = `this is not a prime number`
  }
};

module.exports = ResultView;
