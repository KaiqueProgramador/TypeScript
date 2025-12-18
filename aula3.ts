interface Usuario {
    nome: string,
    idade: number,
    email?: string; // opcional
}
const user: Usuario = {
    nome: "Maria",
    idade: 28
}
console.log(user);

type Produto = {
  nome: string;
  preco: number;
};
const item: Produto = {
    nome: "Mouse",
    preco: 100
}
console.log(item);

let id: number | string;
id = 10;
id = "ABC";
console.log(id);