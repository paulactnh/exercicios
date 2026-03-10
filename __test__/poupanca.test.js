const ContaPoupanca = require('../models/ByteBank')
const contaPoupanca = new ContaPoupanca(5)

describe('teste unitário da conta poupança', ()=>{
    test('juros', ()=>{
        const saldo_final = contaPoupanca.aplicarJuros()
        saldo_vdd = 502.5
        expect(saldo_final).toBeCloseTo(saldo_vdd,2)
    })
})