//Задача 3

const currentMaxValue = 4589;
let reverseMaxValue = currentMaxValue.toString().split("").reverse().join("") * 1;

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'