const myObjects = [ 
    {
    name: "car1",
    make: "Tesla",
    model: 5,
    color: "red",
    getInfo: function () {
        return `This is the ${this.name} - a ${this.make}, Model: ${this.model} and ${this.color} color.`;
    }
},

{
    name: "car2",
    make: "Ford",
    model: "Fiesta",
    color: "blue",
    getInfo: function () {
        return `This is the ${this.name} - a ${this.make}, Model: ${this.model} and ${this.color} color.`;
    }
},

{
    name: "car3",
    make: "VW",
    model: "Tiguan",
    color: "black",
    getInfo: function () {
        return `This is the ${this.name} - a ${this.make}, Model: ${this.model} and ${this.color} color.`;
    }
},

{
    name: "dog",
    breed: "Border Collie",
    age: 3,
    getInfo: function () {
        return `This is the ${this.name} - a ${this.breed}, ${this.age} years old.`;
    }
},
{
    name: "cat",
    breed: "Bengal Cat",
    age: 2,
    getInfo: function () {
        return `This is the ${this.name} - a ${this.breed}, ${this.age} years old.`;
    }
},
{
    name: "ponny",
    breed: "Australian Pony",
    age: 5,
    getInfo: function () {
        return `This is the ${this.name} - a ${this.breed}, ${this.age} years old.`;
    }
},

{
    name: "John Doe",
    weight: "90kg",
    age: 35,
    getInfo: function () {
        return `I am ${this.name} and I am ${this.age} years old.`;
    }
},
{
    name: "Jane Doe",
    weight: "60kg",
    age: 30,
    getInfo: function () {
        return `I am ${this.name} and I am ${this.age} years old.`;
    }
},
{
    name: "Fred Flintstone",
    weight: "110kg",
    age: 32,
    getInfo: function () {
        return `I am ${this.name} and I am ${this.age} years old.`;
    }
}
];

(function printObjects() {
    const resultDiv = document.querySelector(".container");
    resultDiv.style.textAlign = "center";
    
    for (const obj of myObjects) {
        resultDiv.innerHTML += `
            <h2 style="margin:1rem; padding: .5rem; border: 1px solid brown; border-radius: 5px;">${obj.getInfo()}</h2>
        `;
    }
})();