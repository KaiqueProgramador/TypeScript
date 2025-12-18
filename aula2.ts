function soma(a: number, b: number): number {
    return a + b;
}
const resultado = soma(2, 5);
console.log(resultado);

const multiplicar = (a: number, b: number): number => a * b;
const resultado2 = multiplicar(2, 5);
console.log(resultado2);

let numeros: number[] = [1, 2, 3];
let nomes: string[] = ["Ana", "João"];
console.log(numeros, nomes);

let usuario: {
    nome: string;
    idade: number;
} = {
    nome: "Carlos",
    idade: 30
}
console.log(usuario);
console.log(usuario.nome);