//Dado trucado
//Alternativa rápida --> generador con multiples opciones simulando tirada de un dado
var rollDice = () => Math.floor(Math.random() * 6) + 1;
// Representándolo gráficamente tendríamos:
// 0     1     2     3     4     5      6
// [-----|-----|-----|-----|-----|-----)
//    0     1     2     3     4     5    Math.floor()
//    1     2     3     4     5     6   + 1
console.log(rollDice())

//¿favorecer más a unos números que a otros?
var results = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6];
var rollDice = () => results[Math.floor(Math.random() * 10)];

console.log(rollDice());

//Alternativa precisa -->

var dadoProb = [10, 10, 20, 30, 10, 20];
var calcAccumulteProb = pro => {
    var accProb = [];
    for (var i = 0, acc = 0; i < pro.length; i++) {

    }
}