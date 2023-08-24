const numeros = [54, 22, 14, 87, 10, 284];

let posicao = -1;

for (let índice = 0; índice < numeros.length; índice++) {
    if (numeros[índice] === 10) {
        posicao = índice;
    }

} if (posicao === -1) {
    console.log("-1")
} else {
    console.log(posicao)
}
