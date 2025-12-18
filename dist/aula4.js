"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}
const p1 = new Pessoa("Carlos");
p1.falar();
class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }
    getSaldo() {
        return this.saldo;
    }
}
const minhaConta = new Conta(1000);
console.log(minhaConta.getSaldo());
class UsuarioSistema {
    login() {
        return true;
    }
}
const a = new UsuarioSistema();
console.log(a.login());
