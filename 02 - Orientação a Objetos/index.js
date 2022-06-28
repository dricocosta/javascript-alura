class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    // underline indica que o atributo "valor" é privado e não deve ser alterado
    _saldo = 0;

    //Método para sacar
    sacar(valor){
        if (this._saldo >= valor){    
            this._saldo -= valor;
            return valor;
        }
    }
    //Método para depositar
    depositar(valor){
        if(valor <= 0){
            return;            
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22233344409;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(300);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado)

console.log(contaCorrenteRicardo);




