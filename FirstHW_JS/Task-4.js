//Задача 4

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(2).reduce((sum, item) => sum *  item);

console.log(productOfArray); // 24 