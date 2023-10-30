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
            console.log("BOOM!");
        }

    }, 1000);

}  


//Задача 2

 detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {
    if (delay === 0){
        return console.log("BOOM!");
    }

    setTimeout(() => {
        console.log(delay);
        detonatorTimer(delay-1);
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
myCat.getHomeAdress(); 

//Задача 4

let securedCatIntroduce = myCat.introduce.bind(myCat);
let securedCatDescription = myCat.description.bind(myCat);
let securedCatAdress = myCat.getHomeAdress.bind(myCat);

setTimeout(securedCatIntroduce, 1000);
setTimeout(securedCatDescription, 2000);
setTimeout(securedCatAdress, 3000); 

//Задача 5

function someFunction (a, b){
	return a * b;
}

function slower(func, seconds) {
    console.log("Chill out, you will get you result in 5 seconds")
    return function (a, b) {
        setTimeout(() =>{
            return console.log("Your result is", func(a, b))
        }, seconds * 1000)
    }
}

let slowedSomeFunction = slower(someFunction, 5); 

slowedSomeFunction(5, 3) 

