function apresentar(nome) {
  return `meu nome é ${nome}`;
}

// arrow function
const apresentArrow = (nome) => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//arrow Function com mais de uma linha

const somarNumeroPequeno = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "soment num 1 a 9";
  } else {
    return num1, num2;
  }
};

// Hoisting: arrow function se comporta com expressão
