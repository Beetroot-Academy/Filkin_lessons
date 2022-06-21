
// Minimal

// 1 Task

/*
  1.  function newFunction (){
    }

  2. let newFunction = function (){
  }

  3. let newFunction = () =>...
*/

// 2 Task

function countArgs(...args) {
    return args.length;
}

// console.log(countArgs(1, 2, 4, 8, 5, 19, 1));

// 3 Task

function compareNumber(a, b) {
    if(a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

// console.log(compareNumber(2, 2));

// 4 Task

function getFactorial(a) {
    let result = 1;

    for(let i = a; i != 0; i--) {
        result *= i;
    }

    return result;
}

// console.log(getFactorial(5));

// 5 Task

function ammountNum (a, b, c) {
    let result;
    result = ` ` + a + b + c;
    return result;
}

// console.log(ammountNum(1, 2, 3))

// 6 Task

function calcSquare(a, b) {
    let result;
    if(b == undefined) {
        result = a * 4;
    } else {
        result = a * b;
    }
    return result
}

// console.log(calcSquare(1, 2))
// console.log(calcSquare(1, ))

// Normal 

// 1 Task

function checkPerfectNum(a) {

    let sum = 0;

    for(i = 0; i < a; i++) {
        (a % i == 0) ? (sum += i) : false;
	}

	return (sum == a);
}

// console.log(checkPerfectNum(6));

// 2 Task 

function checkRangePerfectNum(a,b) {

    for(let i = a; i < b; i++) {

        if(checkPerfectNum(i)) {
            console.log(`${i} - perfect number!`)};
    }
}

// console.log(checkRangePerfectNum(1, 1000))

