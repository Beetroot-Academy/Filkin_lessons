setInterval(function flip() {
  let toSelect = 1;
  const blocks = document.getElementById("blocks").children;
  const used = [];

  while (toSelect !== 0) {
    const index = Math.floor(Math.random() * blocks.length);

    if (used.lenght === blocks.length) break;
    if (used.includes(index)) continue;

    blocks[index].classList.toggle("flip-vertical-right");
    used.push(index);
    toSelect--;
  }
}, 2000);
