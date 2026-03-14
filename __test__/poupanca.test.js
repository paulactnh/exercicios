const ContaPoupanca = require('../models/ByteBank')
const contaPoupanca = new ContaPoupanca()

describe('teste unitário da conta poupança', ()=>{
    test('juros', ()=>{
        const saldo = contaPoupanca.aplicarJuros()
        saldo_vdd = 502.5
        expect(saldo).toBeCloseTo(saldo_vdd,2)
    })
    test('rendimento', ()=>{
        const montante = contaPoupanca.preverRendimento(6)
        montante_vdd = 517.57
        expect(montante).toBeCloseTo(montante_vdd,2)
    })
})