// Function to declare Euro to Dollar
const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

// Function to declare Dollar to Yen
const fromDollarToYen = function (valueInDollar) {

    //Convert price in euro first
    let valueInEuro = valueInDollar / 1.2;
    //Use Value in Euro to convert to Yen
    let valueInYen = valueInEuro * 127.9;
    // Parse Value to received 2 decimals
    let parseValue = Math.floor(valueInYen * 100) / 100;
    return parseValue;
}

//Function to declare Yen to Pound
const fromYenToPound = function (valueInYen) {

    //Convert price of Yen to Euro first
    let valueInEuro = valueInYen / 127.9;
    //Use the value in Euro to convert to Pound
    let valueInPound = valueInEuro * 0.8;
    // Parse Value to received 2 decimals
    let parseValue = Math.floor(valueInPound * 100) / 100;
    return parseValue;
}




// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }