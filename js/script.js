let d = document;
let days = d.querySelector("#days");
let hours = d.querySelector("#hours");
let minutes = d.querySelector("#minutes");
let seconds = d.querySelector("#seconds");

let start = d.querySelector("#start");
let stop = d.querySelector("#stop");
let reset = d.querySelector("#reset");

let timeView = d.querySelector("input");
let interval;

start.onclick = () => {
  if (timeView.value.length > 8) {
    timeView.value = "";
    days.innerHTML = 00;
    hours.innerHTML = 00;
    minutes.innerHTML = 00;
    seconds.innerHTML = 00;
    alert(`Error`);
  } else if (timeView.value.length > 1 && timeView.value.length < 3) {
    seconds.innerHTML = timeView.value;
  } else if (timeView.value.length > 2 && timeView.value.length < 5) {
    minutes.innerHTML = timeView.value.slice(0, 2);
    seconds.innerHTML = timeView.value.slice(2, 4);
  } else if (timeView.value.length > 4 && timeView.value.length < 7) {
    hours.innerHTML = timeView.value.slice(0, 2);
    minutes.innerHTML = timeView.value.slice(2, 4);
    seconds.innerHTML = timeView.value.slice(4, 6);
  } else if (timeView.value.length > 6 && timeView.value.length < 9) {
    days.innerHTML = timeView.value.slice(0, 2);
    hours.innerHTML = timeView.value.slice(2, 4);
    minutes.innerHTML = timeView.value.slice(4, 6);
    seconds.innerHTML = timeView.value.slice(6, 8);
  }
  interval = setInterval(timeFunc, 1000);
};

stop.onclick = () => {
  clearInterval(interval);
};
reset.onclick = () => {
  timeView.value = "";
  days.innerHTML = 00;
  hours.innerHTML = 00;
  minutes.innerHTML = 00;
  seconds.innerHTML = 00;
};

function timeFunc() {
  seconds.innerHTML--;
  if (seconds.innerHTML < 0) {
    seconds.innerHTML = 59;
    minutes.innerHTML--;
  }
  if (minutes.innerHTML < 0) {
    minutes.innerHTML = 59;
    hours.innerHTML--;
  }
  if (hours.innerHTML < 0) {
    hours.innerHTML = 59;
    days.innerHTML--;
  }
  if (days.innerHTML < 0) {
    days.innerHTML = 00;
    hours.innerHTML = 00;
    minutes.innerHTML = 00;
    seconds.innerHTML = 00;
    clearInterval(interval);
  }
}
