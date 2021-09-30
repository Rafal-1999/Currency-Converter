{
    const welcome = () => {
        console.log(`Witam wszystkich programistów!`);
    };

    const init = () => {
        const amount = document.querySelector(".js-amount");
        const exchangeButton = document.querySelector(".js-exchangeButton");
        amount.focus();
        firstCurrency.addEventListener("input", (selectFirstCurrency));
        secondCurrency.addEventListener("input", (selectSecondCurrency));
        exchangeButton.addEventListener("click", (toggleValues));
        convertButton.addEventListener("click", (calculateResult));
        welcome();
    };

    const selectFirstCurrency = () => {
        let firstCurrencyValue = 1;
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
        showCurrentCourse();
    };

    const selectSecondCurrency = () => {
        let secondCurrencyValue = 4.57;
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
        showCurrentCourse(secondCurrencyValue);
    };

    const toggleValues = (amount, result) => {
        oneValue = amount.value;
        twoValue = result.value;

        amount.value = twoValue;
        result.value = oneValue;
    };

    const showCurrentCourse = (secondCurrencyValue) => {
        if (firstCurrency.value !== secondCurrency.value) {
            currentRate.innerText = `1 ${firstCurrency.value} = ${secondCurrencyValue}`;
        } else {
            currentRate.innerText = ``;
        }
    };

    const calculateResult = (event) => {
        event.preventDefault();

        worthOne = amount.value / secondCurrencyValue;
        result.value = worthOne.toFixed(2);
    };

    const firstCurrency = document.querySelector(".js-firstCurrency");
    const currentRate = document.querySelector(".js-currentRate");
    const secondCurrency = document.querySelector(".js-secondCurrency");
    const result = document.querySelector(".js-result");
    const convertButton = document.querySelector(".js-convertButton");
    const lastExchanges = document.querySelector(".js-lastExchanges");

        const newExchange = document.createElement("p");
        newExchange.innerHTML = `<b>${result.value} ${secondCurrency.value}</b>`;
        lastExchanges.appendChild(newExchange);
    init();
}