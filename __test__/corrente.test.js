const ContaCorrente = require('../models/ByteBank')
const contaCorrente = new ContaCorrente(500)

describe('teste unitário da Conta Corrente', ()=>{
    test('depositar valor', ()=>{
        const saldo = contaCorrente.depositar(100)
        const saldovdd = 600
        expect(saldo).toBe(saldovdd)
    })
    test('sacar valor', ()=>{
        const saldo = contaCorrente.sacar(200)
        expect(saldo).toBe(true)
    })
})
