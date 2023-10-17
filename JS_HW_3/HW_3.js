//Задача 1

console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function addThemAll(...args) {
    let arr = [...args];
    let sum = 0;
    for(let item of arr) {
        sum += item; 
    }
    return sum;
}

//Задача 2

console.log(multiply(5)(5))	// 25
console.log(multiply(2)(-2))	// -4
console.log(multiply(4)(3))		// 12

function multiply(a) {
    function multiply2(b) {
    return a * b;
    }
    return multiply2;
}

//Задача 3





//Задача 4

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
return Array.from([...new Set(userNames)]);
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];