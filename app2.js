//Triangulo de billar
//1.Array vacio introducir bolar de billar
var balls = [];

//2. Crear función generadora de bolas desordenadas
var generateUnsortedBalls = array => {
    while (array.length < 15) {
        var newBall = Math.floor(Math.random() * 15) + 1;
        if (array.indexOf(newBall) === -1) {
            array.push(newBall);
        }
    }
    return array;
};
console.log("**** Array de bolas desordenadas: ", generateUnsortedBalls(balls));