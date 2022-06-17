console.log("Atribuição de Variáveis");
console.log("")
console.log("Atribuindo com const")
const idade = 34; // const declaração é global e não permite nova atribuição
const nome = "Airton"; 
const sobrenome = "Senna";

console.log(nome, sobrenome);
console.log(`Seu nome é ${nome} ${sobrenome}`);

const nomeCompleto = nome + sobrenome; //concatena
console.log(nomeCompleto);

console.log("")
console.log("Atribuindo com let")
// let - declaração é por bloco e permite nova atribuição
let contador = 0;
contador = contador + 1;

let novaIdade; //declarando variável
novaIdade = 26; //atribuindo variável
novaIdade = novaIdade + 1;
console.log(novaIdade); 



