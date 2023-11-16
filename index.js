(function () {
  "use strict";

  // YOUR CODE HERE

  // Declaring buttons
  const stopBtn = document.getElementById("stopButton");
  const slowBtn = document.getElementById("slowButton");
  const goBtn = document.getElementById("goButton");

  // Declaring lights
  const stopLight = document.getElementById("stopLight");
  const slowLight = document.getElementById("slowLight");
  const goLight = document.getElementById("goLight");

  // EventListeners for click event to toggle the lights
  stopBtn.addEventListener("click", () => {
    stopLight.classList.toggle("stop");
  });
  slowBtn.addEventListener("click", () => {
    slowLight.classList.toggle("slow");
  });
  goBtn.addEventListener("click", () => {
    goLight.classList.toggle("go");
  });

  // EventListeners for entering the button
  stopBtn.addEventListener("mouseenter", () => {
    console.log("Mouse entered stop button");
  });
  slowBtn.addEventListener("mouseenter", () => {
    console.log("Mouse entered slow button");
  });
  goBtn.addEventListener("mouseenter", () => {
    console.log("Mouse entered go button");
  });

  // EventListeners for leaving the button
  stopBtn.addEventListener("mouseleave", () => {
    console.log("Mouse left stop button");
  });
  slowBtn.addEventListener("mouseleave", () => {
    console.log("Mouse left slow button");
  });
  goBtn.addEventListener("mouseleave", () => {
    console.log("Mouse left go button");
  });

  //addEventListener("mouseleave", (event) => {});})();
})();
