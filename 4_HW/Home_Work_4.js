// Задача 1

 detonatorTimer(3);
// 3
// 2
// 1
// BOOM! 

function detonatorTimer(delay){

    let stopTimer = setInterval(() => {
        console.log(delay);
        delay--;
        if (delay === 0){
            clearInterval(stopTimer);
            setTimeout(() => { 
                console.log("BOOM!")}, 1000);
        }

    }, 1000);

}  


//Задача 2

 detonatorTimer(5);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {
    setTimeout(function tick() {
        console.log(delay);
        delay--;
        if (delay === 0){
            return setTimeout(() => { 
            console.log("BOOM!")}, 1000);
        }
        setTimeout(tick, 1000);
      }, 1000);

}


//Задача 3

 let myCat = {
    name: "Malibu",
    breed: "British Shorthair",
    yearOfBorn: 2018,
    color: "grey",
    gender: "female",
    cityOfBorn: "Southampton",
    weight: "7 kg",
    adress: {
        city: "London",
        street: "Brudenell Road",
        flat: "22B",
        postCode: "SW17 8DA"
    },

    introduce() {
        console.log(`I had a cat ${this.name} when I lived in England, his breed is ${this.breed}.`);
    },
    description(){
        let now = new Date()
        let ageOfCat = now.getFullYear() - this.yearOfBorn;
        console.log(`She is`, ageOfCat, `years old and ${this.color} in color.`);
    },
    getHomeAdress() {
        console.log(`${this.name} lives in house at adress: City of ${this.adress.city}, ${this.adress.street}, flat ${this.adress.flat}.`)
    }

}

myCat.introduce();
myCat.description();
myCat.getHomeAdress();  */

//Задача 4

let securedCatIntroduce = myCat.introduce.bind(myCat);
let securedCatDescription = myCat.description.bind(myCat);
let securedCatAdress = myCat.getHomeAdress.bind(myCat);

setTimeout(securedCatIntroduce, 1000);
setTimeout(securedCatDescription, 2000);
setTimeout(securedCatAdress, 3000); 

//Задача 5

function someFunction (...args){
    let result = 0;
    for(let item of args) {
        result += item; 
    }
    return result;
}

function slower(func, seconds) {
    console.log("Chill out, you will get you result in 5 seconds")
    return function (...args) {
        setTimeout(() =>{
            return console.log("Your result is", func(...args))
        }, seconds * 1000)
    }
}

let slowedSomeFunction = slower(someFunction, 5); 

slowedSomeFunction(5, 4, 15) 

