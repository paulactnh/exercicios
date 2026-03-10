class ContaCorrente{
    constructor(saldo,valor){
        this.valor = valor
        this.saldo = saldo
    }

    depositar(){
    return this.saldo+=this.valor
    }

    sacar(){
        if(this.valor <= this.saldo){
            this.saldo-=this.valor
            return true
        }else{
            return false
        }
    }
}

class ContaPoupanca extends ContaCorrente{
    constructor(meses){
        this.meses = meses
    }
    
    aplicarJuros(){
        return this.saldo = this.saldo * 1.005
    }

    preverRendimento(){
        return montante = this.saldo * (1 + (0.05 * this.meses))
    }
}

module.exports = ContaCorrente