//Задача 1

 const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
    
let initials = userNames.map(name => {
    let splitedNames = name.split (" "); // [ [Петрик] [Ольга] [Іванівна], [Гнатюк] [Петро] [Антонович], [Рудко] [Андрій] [Опанасович] ]
    let FIO = splitedNames.map(item => item[0].toUpperCase()); // [ [ 'П', 'О', 'І' ], [ 'Г', 'П', 'А' ], [ 'Р', 'А', 'О' ] ]
    return FIO.join('.'); // [ 'П.О.І', 'Г.П.А', 'Р.А.О' ]
});

console.log(initials.sort()) // [ 'Г.П.А', 'П.О.І', 'Р.А.О' ]