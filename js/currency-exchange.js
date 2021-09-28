{
    const welcome = () => {
        console.log(`Witam wszystkich programistów!`);
    };

    const init = () => {
        const amount = document.querySelector(".js-amount");
        amount.focus();
        firstCurrency.addEventListener("input", (selectFirstCurrency));
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
    }

    const firstCurrency = document.querySelector(".js-firstCurrency");
    const exchangeButton = document.querySelector(".js-exchangeButton");
    const currentRate = document.querySelector(".js-currentRate");
    const secondCurrency = document.querySelector(".js-secondCurrency");
    const result = document.querySelector(".js-result");
    const convertButton = document.querySelector(".js-convertButton");
    const lastExchanges = document.querySelector(".js-lastExchanges");

    const secondCurrencyValue = 4.57;

        
        if (firstCurrency.value !== secondCurrency.value) {
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
        if (firstCurrency.value !== secondCurrency.value) {
            currentRate.innerText = `1 ${firstCurrency.value} = ${secondCurrencyValue}`;
        } else {
            currentRate.innerText = ``;
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

        const newExchange = document.createElement("p");
        newExchange.innerHTML = `<b>${result.value} ${secondCurrency.value}</b>`;
        lastExchanges.appendChild(newExchange);
    });
    init();
}