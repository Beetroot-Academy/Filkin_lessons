// Name
let userName = prompt ('What is your name?');
alert (`Hello ${userName}!` );

// Year
const nowYear = 2022;
let userYear = prompt ('What is your year of birth?');
let userAge = nowYear - +userYear;
alert (`You are ${userAge}!`);

// Perimetr
let questLength = prompt ('Tell me the length of the side of the square!');
let resultPerimetr = questLength ** 2;
alert (`Perimeter of your square is ${resultPerimetr}!`);

// Radius
let questRadius = prompt ('Tell me the radius of the circle!');
const numberPi = 3.14;
let resultSquare = numberPi * (questRadius ** 2);
alert (`Square of your circle is ${resultSquare} centimeters square!`)

// Сurrency Exchange
let questDollar = prompt ('How many dollars do you want to exchange?');
const exchangeRates = 0.94;
let resultEuro = questDollar * exchangeRates;
alert (`You'll get ${resultEuro} Euro!`)