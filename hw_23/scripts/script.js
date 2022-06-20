// 1 task

let playList= [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }];

let player = document.querySelector('.first-task');
let songList = document.createElement("ol");
player.append(songList);

for (let i in playList) {
    const songListBlock = document.createElement("li");
    songListBlock.innerHTML = `${playList[i].author} - ${playList[i].song}`;
    songList.append(songListBlock);
  }

// 2 Task

let openButton = document.querySelector('.btn');
let closeButton = document.querySelector('.btn--close');
let modalWindow = document.querySelector('.modal');

openButton.addEventListener('click', function() {
    modalWindow.classList.add('active')
});

closeButton.addEventListener('click', function() {
    modalWindow.classList.remove('active')
});

// 3 Task

let trafficLight = document.querySelector('.trafficlight');

let redlight = document.getElementById("red");
let orangelight = document.getElementById("orange");
let greenlight = document.getElementById("green");
let trafficLightButton = document.getElementById('traffic__btn');

trafficLightButton.addEventListener("click", function() {
    if (redlight.classList.contains("trafficlight--red")) {
        redlight.classList.remove("trafficlight--red");
        orangelight.classList.add("trafficlight--orange");
      } else if (orangelight.classList.contains("trafficlight--orange")) {
        orangelight.classList.remove("trafficlight--orange");
        greenlight.classList.add("trafficlight--green");
      } else if (greenlight.classList.contains("trafficlight--green")) {
        greenlight.classList.remove("trafficlight--green");
        redlight.classList.add("trafficlight--red");
      }
});


