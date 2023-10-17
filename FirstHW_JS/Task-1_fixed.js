//Задача 1

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
    
const initials = userNames.map(name => {
    return name.split(" ").map(item => item[0].toUpperCase()).join('.');
}).sort(); 

console.log(initials); // [ 'Г.П.А', 'П.О.І', 'Р.А.О' ]