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

//Exercici 4 nivell 2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const showNumbers = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
showNumbers(numbers);

//Exercici 5 nivell 3
const printAfterThreeSeconds = setTimeout(() => {
    console.log(`Hola després d'esperar 3 segons`);
}, 3000);

//Exercici 1.2: Operador ternari

//Exercici 1 nivell 1
const potConduir = (edat) => {
    return (edat >= 18) ? "Pot conduir" : "No pot conduir";
};

console.log(potConduir(20));
console.log(potConduir(17));

//Exercici 2 nivell 1
const quinEsMesGran = (num1, num2) => {
    return (num1 > num2) ? `${num1} és més gran` : `${num2} és més gran`;
 };
 
 console.log(quinEsMesGran(2,7))