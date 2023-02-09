class Animal {
    breed;
    name;
    age;
    weight;
    
    constructor(breed, name, age, weight) {
        this.breed = breed;
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    getInfo() {
        return `I am a ${this.breed}, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Car {
    make;
    model;
    color;

    constructor (make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getInfo() {
        return `This is a ${this.make}, model ${this.model} and it is ${this.color}.`;
    }
}

class Person {
    firstName;
    lastName;
    age;
    profesion;

    constructor(fname, lname, age, profession) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.profession = profession;
    }

    getInfo() {
        return `I am ${this.firstName} ${this.lastName}, I am ${this.age} years old and I am a ${this.profession}`;
    }
}

const person1 = new Person("John", "Doe", 35, "Teacher");
const person2 = new Person("Jane", "Doe", 30, "Secretary");
const person3 = new Person("Mickey", "Mouse", 35, "Runner");

const animal1 = new Animal("cat", "kitty", 3, 4);
const animal2 = new Animal("dog", "bob", 6, 7);
const animal3 = new Animal("frog", "kermit",1, 0.1);

const car1 = new Car("Tesla", "5", "red");
const car2 = new Car("Porshe", "Cayenne", "black");
const car3 = new Car("VW", "Passat", "grey");

const myObjects = [person1, person2, person3, animal1, animal2, animal3, car1, car2, car3];
const resultDiv = document.querySelector(".container");

(function () {
    for (const obj of myObjects) {
        resultDiv.innerHTML += `
            <h2 style="text-align: center; border: 2px solid brown; width: fit-content; margin: 1rem auto; padding: 5px; border-radius: 5px;">${obj.getInfo()}</h2>
        `;
    }
})();