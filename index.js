'use strict';

const stopBtn = document.getElementById("stopButton");
const slowBtn = document.getElementById("slowButton");
const goBtn = document.getElementById("goButton");

const stopLight = document.getElementById("stopLight");
const slowLight = document.getElementById("slowLight");
const goLight = document.getElementById("goLight");


console.log(stopLight);

stopBtn.addEventListener('click', () => {
  stopLight.classList.toggle("stop");
});

slowBtn.addEventListener('click', () => {
  slowLight.classList.toggle("slow");
});

goBtn.addEventListener('click', () => {
  goLight.classList.toggle("go");
});

// var x = createelement html <div>
// x.style.backgroundcolor
// htmlTAG.






// comment out later
/*
const span = document.querySelector("span");
const classes = span.classList;

span.addEventListener("click", () => {
  const result = classes.toggle("c");
  span.textContent = `'c' ${
    result ? "added" : "removed"
  }; classList is now "${classes}".`;
});
*/