console.log(`Trabalhando com listas`);

//Utilizando Array para criar lista

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Porto Alegre`,
);

// push adiciona item ao final d alista
listaDeDestinos.push(`Curitiba`);

console.log(`Destinos de viagem:`);
console.log(listaDeDestinos);

//splice remove item da lista
listaDeDestinos.splice(1,1); //o primeiro é a posição e o segundo a quantidade
console.log(`Destinos de viagem:`);
console.log(listaDeDestinos);

//exibe uma posição específica da lista
console.log(listaDeDestinos[1]);
