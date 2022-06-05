// fazer um programa que leia dois inteiros: R e V 
//     (devem ser lidos tantos valores para V quantos necessários, até que seja digitado um valor maior do que R para ele). 
//     Conte quantos números inteiros devem ser somados em sequência (considerando o R nesta soma) para que a soma ultrapasse a V o mínimo possível.
//     Escreva o valor final da contagem.

// A entrada pode conter, por exemplo, os valores 21 21 15 30. 
//     Neste caso, é então assumido o valor 21 para R enquanto os valores 21 e 15 devem ser desconsiderados pois são menores ou iguais a R.
//     Como o valor 30 está dentro da especificação (maior do que R) ele será válido 
//     e então deve-se processar os cálculos para apresentar na saída o valor 2,
//     pois é a quantidade de valores somados para se produzir um valor maior do que 30 (21 + 22).

// Imprima uma linha com um número inteiro que representa a quantidade de números inteiros que devem ser somadas, de acordo com a especificação acima.


// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar


let totalItems = parseInt(gets());
let pares = [];
let impares = [];

for (let i = 0; i < totalItems; i++) {
  let number = parseInt(gets());
  if (number % 2 == 0){
    pares.push(number);
  }
  else {
    impares.push(number);
  }
}
pares.sort((a, b) => {return a-b});
impares.sort((a, b) => {return b-a});

for(let i = 0; i < pares.length;i++){
  print(pares)
}
for(let i = 0; i < impares.length;i++){
  print(impares)
}