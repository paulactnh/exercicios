const ContaCorrente = require('../models/ByteBank')
const contaCorrente = new ContaCorrente(500,100)

describe('teste unitário da Conta Corrente', ()=>{
    test('depositar valor', ()=>{
        const res_saldo = contaCorrente.depositar()
        const res_vdd = 600
        expect(res_saldo).toBe(res_vdd)
    })
    test('sacar valor', ()=>{
        const res_saldo = contaCorrente.sacar()
        expect(res_saldo).toBe(true/false)
    })
})
