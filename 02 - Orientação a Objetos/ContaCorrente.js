export class ContaCorrente{
    agencia;
    cliente;

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
    
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }