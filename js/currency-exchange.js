let firstCurrency = document.querySelector(".js-firstCurrency");
let amount = document.querySelector(".js-amount");
let exchangeButton = document.querySelector(".js-exchangeButton");
let currentRate = document.querySelector(".js-currentRate");
let secondCurrency = document.querySelector(".js-secondCurrency");
let result = document.querySelector(".js-result");
let convertButton = document.querySelector(".js-convertButton");

let firstCurrencyValue = 0;
let secondCurrencyValue = 0;
firstCurrency.addEventListener("input", () => {
    let firstCurrencyValue = 0;
    switch (firstCurrency.value) {
        case "PLN":
            firstCurrencyValue = 0;
            break;
        case "EUR":
            firstCurrencyValue = 0;
            break;
        case "USD":
            firstCurrencyValue = 0;
            break;
    }
});

amount.focus();

if ((firstCurrency.value == firstCurrency.value) && (secondCurrency.value == secondCurrency.value)) {
    currentRate.innerText = `1 ${firstCurrency.value} = ${secondCurrencyValue}`;
} else {
    currentRate.innerText = ``;
}

secondCurrency.addEventListener("input", () => {
    switch (secondCurrency.value) {
        case "EUR":
            secondCurrencyValue = 4.57;
            break;
        case "PLN":
            secondCurrencyValue = 1;
            break;
        case "USD":
            secondCurrencyValue = 3.87;
            break;
    }
});

exchangeButton.addEventListener("click", () => {
    oneValue = amount.value;
    twoValue = result.value;

    amount.value = twoValue;
    result.value = oneValue;
});

convertButton.addEventListener("click", (event) => {
    event.preventDefault();

    worthOne = amount.value / secondCurrencyValue;
    result.value = worthOne.toFixed(2);
});