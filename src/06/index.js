const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let pares = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0)
        pares.push(numeros[i])
}

let soma = 0;

for (let a = 0; a < pares.length; a++) {
    soma = soma + pares[a]
} console.log(soma);