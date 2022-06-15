// Minimal

// let ford = {
//     manufacturer: 'Ford',
//     model: 'Mustang',
//     year: 1969,
//     averageSpeed: 100,
//     fuelVolume: 50,
//     fuelConsume: 15,
//     driver: 'Ihor',
//     fuelNow: 0,
// };

// function showInfo(car) {
//     console.log(`
//     Manufacturer: ${car.manufacturer},
//     Model: ${car.model},
//     Year of manufacture: ${car.year},
//     Average speed: ${car.averageSpeed} km/h,
//     Fuel tank capacity: ${car.fuelVolume} l,
//     Average fuel consumption: ${car.fuelConsume}l,
//     Fuel balance: ${car.fuelNow} l,
//     Driver: ${car.driver}.`)
// }

// function addDriver(car, driver) {
// 	return car.driver = driver;
// }

// // addDriver(ford, 'Johnny');
// // showInfo(ford);

// function addFuel(car, fuelAdding) {
//     car.fuelNow = car.fuelNow + fuelAdding;
//     if (car.fuelNow > car.fuelVolume) {
//         console.log(`Your fuel tank is already full!`);
//         car.fuelNow = car.fuelVolume
//     }
// }
 
// function getDistanceTime(car, distance, driver) {
//     if (car.driver != driver) {
//         console.log(`You are not authorized to drive this vehicle!`)
//     }
//     let roadTime = distance / +car.averageSpeed;
//     let chillTime = roadTime / 4;
//     let fullTime = (roadTime + chillTime).toFixed(1);
//     console.log(`You need ${fullTime} hours to get there.`);
//     let needFuel = distance / car.fuelConsume;
//     if (needFuel > car.fuelNow) {
//         console.log(`You need to refuel!`)
//     }
// }

// getDistanceTime(ford, 200, 'Anton');
// addFuel(ford, 80);
// showInfo(ford);

// Normal

let time = {
    hours: 12,
    minutes: 0,
    seconds: 0,
}


function addZero(value) {
    if(value < 10) {
        return "0" + value;
    } else {
        return value;
    }
}

function displayTime(time) {
    console.log(`${addZero(time.hours)}:${addZero(time.minutes)}:${addZero(time.seconds)}.`)
}

displayTime(time);

function addSeconds(time, seconds) {
    result = time.seconds + seconds
    if (result >= 60) {
        time.seconds = result % 60;
        addMinutes(time, Math.round(result / 60))
    } else {
        return time.seconds = time.seconds + result
    }
}

// addSeconds(time, 80)
// displayTime(time);

function addMinutes(time, minutes) {
    result = time.minutes + minutes
    if (result >= 60) {
        time.minutes = result % 60;
        addHours(time, Math.round(result / 60))
    } else {
        return time.minutes = time.minutes + result
    }
}

// addMinutes(time, 80)
// displayTime(time);

function addHours(time, hours) {
    result = time.hours + hours
    if (result >= 24) {
        time.hours = result % 24;
    } else {
        return time.hours = result
    }
}

// addHours(time, 13)
// displayTime(time)

