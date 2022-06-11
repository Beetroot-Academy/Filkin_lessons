// 1 exercise
let ammount1 = 0.1 + 0.2;
alert (ammount1.toFixed(1));

// 2 exercise
let num1 = '1';
let num2 = 2;
let ammount2 = +num1 + num2;
alert(ammount2);

// 3 exercise
let flashVolume = prompt ('How many gigabytes in your flash drive?');
let flashAmmount = flashVolume / 0.82;
let flashInteger = Math.round(flashAmmount);
alert(flashInteger);

// 4 exercise
let questCash = prompt('How much money do you have?');
let questPrice = prompt('What is the price of chocolate?');
let questAmmount = questCash / questPrice;
let numberChoc =  Math.floor(questAmmount);
let changeChoc = questCash - questPrice * numberChoc;
alert(`You will get ${numberChoc} chocolates and your change is ${changeChoc} dollars!`);

// 5 exercise 
let questNum = prompt('Say a three digit number!');

function getReversedNum(questNum) {
    let questResult = 0;
    while (questNum) {
      questResult = questResult * 10 + questNum % 10;
      questNum = Math.floor(questNum / 10);
    }
    return questResult;

  }
  alert(`Your number - ${getReversedNum(questNum)}!`);

//   6 exercise
let questMoney = prompt('Tell me the amount of your contribution!');
let moneyPrecent = questMoney * 0.05;
let moneyCash = (moneyPrecent + +questMoney) * 0.05;
alert(`You will get ${moneyCash}!`);

// 7 exercise
let test = 2 && 0 && 3; // 0
let test1 =  2 || 0 || 3; // 2
let test2 = 2 && 0 || 3; // 3 
console.log(test, test1, test2);
