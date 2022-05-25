// 1 exercise
let ammount1 = 0.1 + +0.2;
alert (ammount1.toFixed(1));

// 2 exercise
let num1 = 1;
n = 2;
let ammount2 = num1 + 2;
alert (ammount2);

// 3 exercise
let flashVolume = prompt ('How many gigabytes in your flash drive?');
let flashAmmount = flashVolume / 0.82;
let flashInteger = Math.round(flashAmmount);
alert (flashInteger);

// 4 exercise
let questCash = prompt ('How much money do you have?');
let questPrice = prompt ('What is the price of chocolate?');
let questAmmount = questCash / questPrice;
let numberChoc =  Math.round(questAmmount);
alert (`You will get ${questAmmount} chocolates!`);