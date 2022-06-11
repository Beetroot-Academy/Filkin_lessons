
// Minimal

// 1 exercise 
let userAge = +prompt('How old are you?');
switch (true) {
    case (userAge >= 0 && userAge <= 11) :
        alert('You are children!')
        break;
    case (userAge >= 12 && userAge <= 17) :
        alert('You are teenager!')
        break;
    case (userAge >= 18 && userAge <= 59) :
        alert('You are adult!')
        break;
    case (userAge >= 60) :
        alert('You are pensioner!')
        break;
    default:
        alert ('Error!');
}

// 2 exercise 
let userNum = +prompt('Enter a number from 0 to 9!');
switch (userNum) {
    case 0:
      alert(')');
      break;
    case 1:
      alert('!');
      break;
    case 2:
      alert('@');
      break;
    case 3:
      alert('#');
      break;
    case 4:
      alert('$');
      break;
    case 5:
      alert('%');
      break;
    case 6:
      alert('^');
      break;
    case 7:
      alert('&');
      break;
    case 8:
      alert('*');
      break;
    case 9:
      alert('(');
      break;
    default:
      alert('Error!');
  }

//   3 exercise 

let num1 = prompt('Enter the first number in the range');
let num2 = prompt('Enter the second number in the range');
let sum = 0;
while(num1<num2){
  num1++;
  sum+=num1;    
}

alert(`Sum of your range is ${sum}!`);

// 4 exercise 

let numDevider1 = prompt('Name the first number');
let numDevider2 = prompt('Name the second number');
let divider;

for( let i = 1; ; i++ ) {
    if (i > numDevider1 && i > numDevider2) break;
    if (numDevider1 % i == 0 && numDevider2 % i == 0) divider = i;
};

alert(`The biggest divider is ${divider}`);

// 5 exercise

let numQuestion = prompt('Enter your number')
for (let i = 1; i <= numQuestion; i++) {
    if (numQuestion % i == 0)
    console.log (i)
}

// Normal 

// 1 exercise

const fiveDigitNum = prompt('Please, Input five-digit number');

if (fiveDigitNum.length == 5 && (+fiveDigitNum > 0))  {
    if (fiveDigitNum[0] == fiveDigitNum[4] && fiveDigitNum[1] == fiveDigitNum[3]) {
        alert(`${fiveDigitNum} is PALINDROM`);
    } else {
        alert(`${fiveDigitNum} is NOT palindrom`);
}
} else {
    alert('Please, Input five-digit number');
}

// 2 exercise

let clientAmmount = +prompt(`Enter your ammount`)
if (clientAmmount < 200 ) {
    alert (`The amount of your purchase is ${clientAmmount}`)
}
else if (clientAmmount >= 300 && clientAmmount < 300) {
    alert(`The amount of your purchase is ${clientAmmount - (clientAmmount*0.05)}`)
}
else if (clientAmmount >= 500) {
    alert(`The amount of your purchase is ${clientAmmount - (clientAmmount*0.07)}`)
} 
else {
alert(`The amount of your purchase is ${clientAmmount - (clientAmmount*0.03)}`)
}

// 3 exercise 

let userNumber = prompt('Enter 10 numbers ');
let userArray = userNumber.split(',', 10);
let posNumber = 0,
    negNumber = 0,
    zero = 0,
    odd = 0,
    even = 0;

for (let i = 0; i < userArray.length; i++) {

    if (userArray[i] > 0) {
        posNumber++;
    } else if (userArray[i] < 0) {
        negNumber++
    } else if (userArray[i] == 0) {
        zero++
    }
    if (userArray[i] % 2 == 0) {
        odd++
    } else {
        even++
    }
}
alert(`Ви ввели: ${posNumber} позитивних значень, ${negNumber} негативних значень, ${zero} нулів. З них: ${odd} парні and ${even} непарні.`);

// 4 exercise 

let weekArr = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];
let question;
let day = 0;

do {
    question = confirm(`${weekArr[day]}. Want to see the next day of the week?`);
    if (day == weekArr.length - 1) {
        day = 0
    } else {
        day++
    }

} while (question == true);
