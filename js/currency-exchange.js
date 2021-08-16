let firstCurrency = document.querySelector(".js-firstCurrency");
let amount = document.querySelector(".js-amount");
let exchangeButton = document.querySelector(".js-exchangeButton");
let currentRate = document.querySelector(".js-currentRate");
let secondCurrency = document.querySelector(".js-secondCurrency");
let result = document.querySelector(".js-result");
let convertButton = document.querySelector(".js-convertButton");

firstCurrency.addEventListener("input", () => {
    switch (firstCurrency.value) {
        case "PLN":
            break;
        case "EUR":
            break;
        case "USD":
            break;
    }
});

amount.focus();

secondCurrency.addEventListener("input", () => {
    switch (secondCurrency.value) {
        case "EUR":
            break;
        case "PLN":
            break;
        case "USD":
            break;
    }
});

exchangeButton.addEventListener("click", () => {
    oneValue = amount.value;
    twoValue = result.value;

    amount.value = twoValue;
    result.value = oneValue;
});