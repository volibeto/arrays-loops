const original = [1, 4, 12, 21, 53, 88, 112];

let pares = [] //var vazia para receber os numeros

for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 === 0) { //Se o restante % da operação divido por 2 for igual a 0
        pares.push(original[i]);  // ele vai add o numero completo a VAR pares
    }
} console.log(pares)