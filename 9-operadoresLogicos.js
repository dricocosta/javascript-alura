console.log(`Operadores Lógicos`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Porto Alegre`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagem = true;


if(
    idadeComprador >= 17 || estaAcompanhada == true) {
    console.log("Comprador maior de idade. Venda realizada. \n\n");
    listaDeDestinos.splice(1,1); //remove item
}else {
    console.log("Comprador não é maior de idade. Não é permitido vender a passagem. \n\n");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagem){
    console.log("Boa Viagem!")
}else{
    console.log("Não pode embarcar.")
}

console.log("Passagens disponíveis:", listaDeDestinos);

