const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

const arrys = arrayA.map((valorA, indice) => Math.min(valorA, arrayB[indice]));

console.log(arrys);
