const sum = (a,b) => {
    return a + b;
}
console.log(sum(7,3));


let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}

function fromDollarToYen(dollarAmount) {
    let usToEuro = (dollarAmount/oneEuroIs.USD);
    let result = usToEuro * oneEuroIs.JPY;
    console.log(usToEuro);
    return result;
}

function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs.USD;
}

function fromYenToPound(yenAmount) {
    return yenAmount/oneEuroIs.JPY*oneEuroIs.GBP;
}

module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen };
