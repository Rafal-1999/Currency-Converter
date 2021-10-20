{
    const welcome = () => {
        console.log(`Witam wszystkich programistów!`);
    };

    const init = () => {
        welcome();
        const firstCurrency = document.querySelector(".js-firstCurrency");
        const amount = document.querySelector(".js-amount");
        const exchangeButton = document.querySelector(".js-exchangeButton");
        const currentRate = document.querySelector(".js-currentRate");
        const secondCurrency = document.querySelector(".js-secondCurrency");
        const result = document.querySelector(".js-result");
        const convertButton = document.querySelector(".js-convertButton");
        firstCurrency.addEventListener("input", () => {
            selectFirstCurrency(firstCurrency);
        });
        secondCurrency.addEventListener("input", () => {
            selectSecondCurrency(secondCurrency);
        });
        exchangeButton.addEventListener("click", () => {
            toggleValues(amount, result);
        });
        convertButton.addEventListener("click", (calculateResult));
    };

    const selectFirstCurrency = (firstCurrency) => {
        let firstCurrencyValue = 1;
        switch (firstCurrency.value) {
            case "PLN":
                return firstCurrencyValue = 0;
            case "EUR":
                return firstCurrencyValue = 0;
            case "USD":
                return firstCurrencyValue = 0;
        }
        showCurrentCourse();
    };

    const selectSecondCurrency = (secondCurrency) => {
        let secondCurrencyValue = 4.57;
        switch (secondCurrency.value) {
            case "EUR":
                return secondCurrencyValue = 4.57;
            case "PLN":
                return secondCurrencyValue = 1;
            case "USD":
                return secondCurrencyValue = 3.87;
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
        addResultToHistory();
    };

    const addResultToHistory = () => {
        const lastExchanges = document.querySelector(".js-lastExchanges");
        const newExchange = document.createElement("p");
        newExchange.innerHTML = `<b>${result.value} ${secondCurrency.value}</b>`;
        lastExchanges.appendChild(newExchange);
    }

    init();
}