const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesA = nomes.filter(a => a[0].toLowerCase(0) === 'a'); //o filtel vai criar um novo ARRAY com os parametros pedidos,a => a[0] usado para selecionar a primeira letra de cara nome
//toLowerCase caso a letra [0] seja === a, ele irá converter para minuscula.
console.log(nomesA);

