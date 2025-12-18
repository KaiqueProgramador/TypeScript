class Pessoa {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}
const p1 = new Pessoa("Carlos");
p1.falar();

class Conta {
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  getSaldo() {
    return this.saldo;
  }
}
const minhaConta = new Conta(1000);
console.log(minhaConta.getSaldo());

interface Autenticavel {
    login(): boolean;
}
class UsuarioSistema implements Autenticavel {
    login(): boolean {
        return true;
    }
}
const a = new UsuarioSistema();
console.log(a.login());