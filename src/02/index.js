const letras = ["A", "a", "B", "C", "E", "e"];

let quantidade = 0;

for (let verifica of letras) {
    if (verifica === "e") {
        quantidade++;
    }
    if (verifica === "E") {
        quantidade++;
    }
}
if (quantidade > 0) {
    console.log(`Foram encontradas ${quantidade} letras "E" ou "e"`)
} else {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}