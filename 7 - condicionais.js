console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Porto Alegre`,
);

const idadeComprador = 18;
console.log(`Destinos de viagem:`);
console.log("Passagens disponíveis:", listaDeDestinos);

if(idadeComprador >= 18){
    console.log(`Comprador maior de idade. Venda permitida.`);
    listaDeDestinos.splice(1,1); //remove item
}else {
    console.log(`Comprador não é maior de idade e não é permitido vender passagem.`)

}


console.log("Passagens disponíveis:", listaDeDestinos);



