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

//Exercici 3 nivell 2
const queEsElNumero = (num) => {
    return (num > 0) ? "El número és positiu" : num <= -1 ? "El número és negatiu" : "El número és 0";
}

console.log(queEsElNumero(5))
console.log(queEsElNumero(-4))
console.log(queEsElNumero(0))

const trobarMaxim = (a,b,c) => {
    return (a > b && a > c) ? "El número a és més gran" : b > a && b > c ? "El número b és més gran" : "El número c més gran";
}

console.log(trobarMaxim(1,10,6));

//Exercici 4 nivell 3
let arrayNumbers = [1, 2, 3, 4, 5];
let result = ""

const parOImpar = (array) => {

    for (let i = 0; i < array.length; i++) {
        result += array[i] % 2 === 0 ? `El ${array[i]} és parell, ` : `El ${array[i]} és imparell, `;
    }
    return result;
}

console.log(parOImpar(arrayNumbers));

//Exercici 1.3: Callbacks

//exercici 1 nivell 1
const processar = (nombre, callback) => {
    callback(nombre)
}

//exercici 2 nivell 1
const calculator = (number1, number2, callback) => callback(number1 + number2)

calculator (5,23, (result) => console.log(result))

//exercici 3 nivell 2
const esperarISaludar = (name, callback) => { setTimeout(() => {
    callback(`Hola, ${name}`)
    }, 2000);
}

esperarISaludar('Mireia', (saludar) => console.log(saludar))

//exercici 4 nivell 2
const arrayElements = ['casa', 'arbre', 'taula']

const processarElements = (array, callback) => {
    for (let i= 0; i < array.length; i++){
        callback(array[i]);
    }
}

const printElement = elemento => {
    console.log(elemento);
};

processarElements(arrayElements, printElement);

//exercici 5 nivell 3
const processarCadena = (cadena, callback) => {
    const cadenaMajuscules = cadena.toUpperCase();
    callback(cadenaMajuscules);
}

const changeToUpper = (cadena) => {
    console.log(cadena);
}

processarCadena("FrontEnd!", changeToUpper);

//Exercici 1.4: Rest & Spread operators

//exercici 1 nivell 1
const array1 = [10, 9, 8]
const array2 = [7, 6, 5]

const combinedArray = [...array1, ...array2]

console.log(combinedArray)

//exercici 2 nivell 1
function suma(...numbers){
    return numbers.reduce((total, number) => total + number, 0)
}

console.log(suma(1,2,3,4,5))

//exercici 3 nivell 2
const objecte1 = {
    nom: 'Mireia',
    cognom: 'Martin',
    ciutat: 'Sabadell'
};

const objecte2 = {...objecte1};

objecte2.ciutat = 'Sant Quirze';

console.log(objecte1);
console.log(objecte2);

//exercici 4 nivell 2
const numbersArray = [1, 2, 3, 4];

const [number1, number2, ...rest] = numbersArray;

console.log(number1, number2, rest);

//exercici 5 nivell 3
const arrayNum = [12, 22, 54];

const sumaArguments = (num1, num2, num3) => {
    const totalSuma = num1 + num2 + num3
    console.log(totalSuma);
}

sumaArguments(...arrayNum);

//exercici 6 nivell 3
const object1 = {
    Vehicle: 'Cotxe',
    Marca: 'Peugeot',
    Any: 2001
};

const object2 = {
    Propietaria: 'Mireia',
    Ciutat: 'Sabadell',
    Edat: 32
};

const object3 = {...object1, ...object2}

console.log(object3)

//Exercici 1.5: Array transformations

//Exercici 1 nivell 1
const numbers_ = [1, 2, 3, 4];

const quadratNum = numbers_.map(number => number * number);

console.log(quadratNum);

//Exercici 2 nivell 1
const numbers_1 = [1, 2, 3, 4];

const parells = numbers_1.filter(number => number % 2 === 0);

console.log(parells);

//Exercici 3 nivell 1
const numbers_2 = [1, 10 , 8, 11];

const mesGran = numbers_2.find(number => number > 10);

console.log(mesGran);

//Exercici 4 nivell 1
const numbers_3 = [13, 7, 8, 21];

const sumaTotal = numbers_3.reduce((total, number) => {
    return total + number;
})

console.log(sumaTotal);

//Exercici 5 nivell 2
const numbers_4 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

const resultSuma = numbers_4.filter(num => num >= 10).map(num => num * 2).reduce((total, num) => total + num, 0);

console.log(resultSuma);

//Exercici 6 nivell 3
const numbers_5 = [11, 12, 13, 14];

const every = numbers_5.every(num => num > 10);

const some = numbers_5.some(num => num > 10);

console.log('Every: ' + every);
console.log('Some: ' + some);

//Exercici 1.6: Array loops

//Exercici 1 nivell 1
let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach(elemento =>{
    console.log(elemento)
});

//Exercici 2 nivell 1
let noms2 = ['Anna', 'Bernat', 'Clara'];

for (let elemento of noms2) {
    console.log(elemento)
}

//Exercici 3 nivell 1
let numeros = [1, 2, 3, 4, 5, 6];

const numsPars = numeros.filter( num => num % 2 === 0)

console.log(numsPars);

//Exercici 4 nivell 2
let obj = { 
    nom: 'Ona', 
    edat: 25, 
    ciutat: 'Barcelona' 
}; 

for (let clave in obj) {
    console.log(clave + ': ' + obj[clave])
}

//Exercici 5 nivell 2
let numeros1 = [1, 2, 3, 4, 5, 6];

for (let elemento of numeros1) {
    console.log(elemento)
    if (elemento === 5){
        break;
    }
}

//Exercici 6 nivell 3
let noms3 = ['Anna', 'Bernat', 'Clara'];

for (let [index, valor] of noms3.entries()){
    console.log(`Index: ${index}, Valor: ${valor}`)
}