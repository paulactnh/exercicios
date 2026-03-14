class ContaCorrente{
    constructor(saldo){
        this.saldo = saldo
    }

    depositar(valor){
    return this.saldo += valor
    }

    sacar(valor){
        if(valor <= this.saldo){
            this.saldo-=valor
            return true
        }else{
            return false
        }
    }
}

class ContaPoupanca extends ContaCorrente{
    saldo = 500
    
    aplicarJuros(){
        return this.saldo = this.saldo * 1.005
    }

    preverRendimento(meses){
        return montante = this.saldo * (1 + (0.005 * meses))
    }
}

module.exports = ContaCorrente
module.exports = ContaPoupanca