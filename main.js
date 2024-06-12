//Exercici 1.1: Arrow functions

//Exercici 1 nivell 1
const add = (a, b) => {
    return a + b;
};

console.log(add (2,7));

//Exercici 2 nivell 1
const randomNumber = () => {return Math.floor(Math.random() * 100)};

console.log(randomNumber());

//Exercici 3 nivell 1
class Person {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    
    greet = () => {
        console.log(`Hola, ${this.name} ${this.surname}`);
    }
}

let persona = new Person('Mireia', 'Martín');

persona.greet();