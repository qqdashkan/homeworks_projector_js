class Organism {
    constructor() {
        this.growth = true;
        this.development = true;
        this.reproduction = true;
    }
        #type = 'cell';

    growthFunction() {
        if (this.growth) {
        return `The ${this.#type} has growth function.`;
        }
    }
    developmentFunction() {
        if (this.development) {
        return `The ${this.#type} has development function.`;
        }
    }
    reproductionFunction() {
        if (this.reproduction) {
        return `The ${this.#type} has reproduction function.`;
        }
    }
}

class Human extends Organism {
    constructor(age, gender, height, weight) {
        super();
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.talkFunction = true;
        this.walkFunction = true;
    }
        #type = 'human';

    description() {     
        return `The ${this.#type} has parameters such as gender, age, height and weight.`;
        }
    getParameters() {
        return `Parameters: height is ${this.height} cm, weight is ${this.weight} kg.`;
        }
    humanFunctions() {
    if (this.talkFunction && this.walkFunction) {
        return `The ${this.#type}s also can walk and talk to each other.`;
        }
    else {
        return 'Features not available.';
        }
    }
}

class Animal extends Organism {
    constructor(character) {
        super();
        this.character = character;
        this.talkFunction = false;
        this.walkFunction = true;
    }
        #type = 'animal';

    description(){
        return `The most ${this.#type}s have wool, paws and tail.`;
    }
    getTypeOfAnimal(){
        if (this.character === 'pet') {
            return `More common ${this.character} is cat or dog.`;
        }
        else if(this.character === 'wild'){
            return `The ${this.character} ${this.#type}s live in nature.`;
        }
    }
    animalFunctions(){
        if (this.walkFunction && !this.talkFunction) {
            return `The ${this.#type}s can't talk, but can walk.`;
        }
    }
}

class Fish extends Organism {
    constructor(habitat) {
        super();
        this.habitat = habitat;
        this.swimFunction = true;
    }
        #type = 'fish';
    description(){
        return `The ${this.#type} have fins and gills to live in water.`;
    }
    fishFunctions(){
        if (this.swimFunction) {
            return `The ${this.#type} live in water and can swim.`;
        }
    }
    getHabitat(){
        if (this.habitat === 'lake') {
            return `The ${this.#type} live in lake.`;
        }
        else if(this.habitat === 'river') {
            return `The ${this.#type} live in river.`;
        }
        else if(this.habitat === 'sea') {
            return `The ${this.#type} live in sea.`;
        }
        else if(this.habitat === 'ocean') {
            return `The ${this.#type} live in ocean.`;
        }
        else {
            return `Also ${this.#type} can live in aquarium.`;
        }
    }
}

class Bird extends Organism {
    constructor(food, color) {
        super();
        this.food = food;
        this.color = color;
        
    }
        #type = 'bird';

    description(){
        return `The ${this.#type}s can fly.`;
    }
    feedBird() {
        if(this.food === 'meat'){
            return `Oops, the ${this.#type} doesn't eat ${this.food}.`;
        }
        if(this.food === 'grass'){
            return `Oops, the ${this.#type} doesn't eat ${this.food}.`;
        }
        if(this.food === 'bug'){
            return `Yummy, ${this.#type}s like to eat ${this.food}s!`;
        }
    }
    guessBird() {
        switch (this.color) {
            case 'green':
            console.log(`Guess a bird in ${this.color} color in 5 sec:
    >Owl
    >Gull
    >Pigeon
    >Parrot`);
            function firstTimer(delay){
                let stopTimer = setInterval(function() {
                    if(delay !== 0) {
                    console.log(delay);
                    }
                
                if(delay === 0) {
                    console.log('Answer is Parrot.');
                    clearInterval(stopTimer);
                    }
                    delay--;
                }, 1000);

        }
        firstTimer(5);
            break;
            
            case 'black':
            console.log(`Guess a bird in ${this.color} color in 5 sec:
    >Owl
    >Gull
    >Crow
    >Pigeon`);
            function secondTimer(delay){
                let stopTimer = setInterval(function() {
                    if(delay !== 0) {
                    console.log(delay);
                    }
                
                if(delay === 0) {
                    console.log('Answer is Crow.');
                    clearInterval(stopTimer);
                    }
                    delay--;
                }, 1000);

        }
        secondTimer(5);
            break;
        }
        return ``;
    }
}

class Child extends Human {
    constructor(age, gender, height, weight, country) {
        super(age, gender, height, weight);
        this.country = country;
        this.talkFunction = false;
        this.walkFunction = false;
        this.studyFunction = true;
        this.playFunction = true;
    }
        #type = 'child';

        set name(name) {
            this._name = name;
        }
        get name() {
            return this._name;
        }

    introduce() {
        if (this.age > 11) {
            this.age = Math.floor(this.age/12);
            return `A ${this.#type} is ${this.age} years old and live in ${this.country}.`;
        }
        else {
            return `A ${this.#type} is ${this.age} months old and live in ${this.country}.`;
        }
    }
    getChildFunctions() {
        if (this.studyFunction) {
            return `A ${this.#type} has study function.`;
        }
        else {
            return 'Features not available.';
        }
    }
    getChildGames() {
        if (this.playFunction) {
            return `A ${this.#type} likes play with toys.`;
        }
        else {
            return 'Features not available.';
        }
    }
}

class Adult extends Human {
    constructor(age, gender, height, weight, country, language, education, occupation) {
        super(age, gender, height, weight);
        this.talkFunction = true;
        this.walkFunction = true;
        this.country = country;
        this.language = language;
        this.occupation = occupation;
        this.education = education;
        this.marriage = true;
        this.children = false;
    }
        #type = 'adult';

        set name(name) {
            this._name = name;
        }
        get name() {
            return this._name;
        }

    introduce() {
        return `An ${this.#type} is ${this.age} years old, he live in ${this.country} and speak ${this.language} language.`;
        }
    getEducation() {
        if (this.education) {
        return `An ${this.#type} has ${this.education} degree in ${this.occupation} field.`;
    }
        else {
        return `An ${this.#type} hasn't education degree.`;
        }
    }
    getFamilyStatus() {
        if (this.marriage && this.children) {
        return `An ${this.#type} is married and has children.`;
        }
        else if (this.marriage && !this.children) {
            return `An ${this.#type} is married and has any children.`;
        }
        else if (!this.marriage && this.children) {
            return `An ${this.#type} isn't married and has children.`;
        }
        else {
            return `An ${this.#type} isn't married and has any children.`;
        };
    }
}



