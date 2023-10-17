//Задача 3

const currentMaxValue = 4589;
let reverseMaxValue = Number(currentMaxValue.toString().split("").reverse().join(""));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'