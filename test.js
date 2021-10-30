// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


//Test to try if one Euro equals 1.206 Dollars
test("One euro should be 1.206 dollars", function () {
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

//Test to try if one Dollar equals 106.58 Yens
test("One dollar should be 106.58 yens", function () {
    //Import function from app.js
    const { fromDollarToYen } = require("./app.js");
    //Test
    expect(fromDollarToYen(1)).toBe(106.58);

})

//Test to try if 1000 Yen is equal to 6.25 Pounds
test("One thousand Yen should be 6.25 Pounds", function () {
    //Import function from app.js
    const { fromYenToPound } = require("./app.js");
    //Test
    expect(fromYenToPound(1000)).toBe(6.25);

})