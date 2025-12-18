let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;

console.log(nome);
console.log(idade);
console.log(ativo);

let curso = "TypeScript"; // TS entende que é string

let resposta: null = null;
let dado: undefined = undefined;
console.log(resposta, dado);

// Aceita qualquer tipo.
let valor: any = 10;
valor = "texto";
valor = null;
console.log(valor);