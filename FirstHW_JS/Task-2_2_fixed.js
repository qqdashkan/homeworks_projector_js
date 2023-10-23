//Задача 2

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const letters = ['А','О','Ю','У','І','Е','Я','Є']; 

//Варіант 2

let filteredNames = userNames.filter(name => {
    const firstLetter = name[0].toUpperCase(); // П Е Ю І М Я В А О
    return letters.includes(firstLetter); // [ 'Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена' ]
});

console.log(filteredNames); // [ 'Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена' ]




