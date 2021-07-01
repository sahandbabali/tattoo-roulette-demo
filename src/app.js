var Shake = require("shake.js");

var myShakeEvent = new Shake({
  threshold: 15, // optional shake strength threshold
  timeout: 1000, // optional, determines the frequency of event generation
});

myShakeEvent.start();

window.addEventListener("shake", shakeEventDidOccur, false);

//function to call when shake occurs
function shakeEventDidOccur() {
  //put your own code here etc.
  document.getElementById(
    "box"
  ).innerHTML = `<img class="responsive" src="./tats/${5}.png" alt="" />`;
}
