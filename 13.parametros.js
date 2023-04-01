function soma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(soma(2, 2));
console.log(soma(245, 25));
console.log(soma(-500, 60));

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha dade é ${idade}`;
}

// console.log(nomeIdade("erick", 37));

function mutiplica(numero1 = 1, numero2 = 1) {
  return numero1 * numero2;
}

console.log(mutiplica(soma(4, 5)));
