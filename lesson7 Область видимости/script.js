/*
function sum(a, b) {
    return a + b;
}

function sum(a, b) {
    let result = a + b;
    return result;
    console.log(`сумма = ${result}`);
}

console.log(sum(100, 330));

function sayHello(userName) {
    console.log(`Привет ${userName}, вам ${getAge} лет`);
}

sayHello('Неизвестный');

getAge('Неизвестный', 345);

function getAge(userName, year) {
    let age = 2022-year;
    console.log(`Привет ${userName}, вам ${age} лет`);
}


check(8);

function check(a) {
    if (a % 2 == 0) {
        console.log('четное');
    } else {
        console.log('нечетное');
    }
}

check(8);

function helloJS() {
    console.log('Привет JavaScript');
}
helloJS();


function checkNumb(a) {
    if (a > 0) {
        console.log('Положительное');
    } else if(a == 0) {
        console.log('Ноль');
    } else {
        console.log('Отрицательное');
    }
}

checkNumb(10); //Положительное

getMonth('весна'); // март, апрель, май

function getMonth(a) {
    if (a.toLowerCase() == 'весна') {
        console.log('март, апрель, май');
    } else if (a.toLowerCase() == 'лето') {
        console.log('июнь, июль, август');
    } else if (a.toLowerCase() == 'зима') {
        console.log('декабрь, январь, февраль');
    }
}

getMonth('Весна'); */

/* // Function Declaration
function hello(userName) {
    console.log(`Привет ${userName}`);
}

hello('Артур');

//Function Expression

let hello2 = function(userName) {
    console.log(`Привет ${userName}`);
}

hello2('Сергей'); 

///////////////////////////////
let someVar = 20;
let someOtherVar = 30;

function sum(a, b) {
    let result = a + b + someVar + someOtherVar;
    return result;
}

let result = sum(2, 3);
console.log(result); */

/* let a = 10;
function fn1(b, c) {
    function fn2(d, e) {
        return a + b + c + d + e;
    }
    return fn2(3, 4);
}

fn1(1, 2); */

console.log(a);
var a = 10;
for (var i = 0; i < 5; i++) {
    console.log(`B цикле ${i}`);
}
console.log(`За циклом ${i}`);



hello('Артур');
// Function Declaration
function hello(userName) {
    console.log(`Привет ${userName}`);
}


hello2('Сергей'); 
//Function Expression
let hello2 = function(userName) {
    console.log(`Привет ${userName}`);
}