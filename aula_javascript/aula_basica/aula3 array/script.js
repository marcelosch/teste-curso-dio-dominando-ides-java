//o que seao vetores ou arrays

//como declarar um array
//let array = ['string', 1, true];
//console.log(array);

//pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// console.log(array[3]);

// forEach
// array.forEach(function(item, index){console.log(item, index)});

//array.push('1');

//array.pop();

// array.shift();

// array.unshift('novo item no inicio');

//console.log(array.indexOf(true));

//array.splice(0,3);

// let novoArray = array.slice(0,3);
// console.log(novoArray);
// console.log(array);

let object = { string: 'string', number: 1, Boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);