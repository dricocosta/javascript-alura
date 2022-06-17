console.log(`Trabalhando com loops`);
const listaDeDestinos = Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagem = false;
const destino = "Rio de Janeiro";


console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

//loop com while
let contador = 0;
while(contador < 3){
    let passagemLocalizada = true;
    if(listaDeDestinos[contador] = destino){
        console.log("Temos passagens para o destino solicitado.");
        break;
    }else{
        console.log("Não temos passagens para o destino.")
    }

    contador += 1;
}

