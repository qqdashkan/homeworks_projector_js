//Задача 2

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const letters = ['А','О','Ю','У','І','Е','Я','Є']; 

//Варіант 1

let filteredNames = []
for (const name of userNames) {
    const firstLetter = name[0].toUpperCase(); // П Е Ю І М Я В А О
    if (letters.includes(firstLetter)) { filteredNames.push(name) } 
}

console.log(filteredNames) // [ 'Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена' ]