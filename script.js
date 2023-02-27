var secondsHand = document.querySelector("#seconds");
var minutesHand = document.querySelector("#minutes");
var hoursHand = document.querySelector("#hour");

  function Update() {
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();
    secondsHand.style.transform= `rotate(${((seconds/60) * 360) + 185}deg)`;
    minutesHand.style.transform= `rotate(${((minutes/60) * 360) + 185}deg)`;
    hoursHand.style.transform= `rotate(${((hours/12) * 360) + 185}deg)`;
}

  setInterval(Update, 997);