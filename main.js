let bar = document.getElementById("time-bar");
let title = document.getElementById("title");
const url0 = document.getElementById("url-0");
const url1 = document.getElementById("url-1");
const url2 = document.getElementById("url-2");
const url3 = document.getElementById("url-3");
const button0 = document.getElementById("focus-0");
const button1 = document.getElementById("focus-1");
const button2 = document.getElementById("focus-2");
const button3 = document.getElementById("focus-3");
const icon = document.getElementById("icon");


function Time() {
  var realTime = new Date();

  var hour = realTime.getHours();
  var minutes = realTime.getMinutes();
  var seconds = realTime.getSeconds();

  var hourStr = String(hour).padStart(2, '0');
  var minutesStr = String(minutes).padStart(2, '0');
  var secondsStr = String(seconds).padStart(2, '0');

  var clockText = hourStr + "<span class='colon' id='colon'>:</span>" + minutesStr;
  var clockTitleText = hourStr + ":" + minutesStr;
  time.innerHTML = clockText;
  if (!isTimerActivated) title.innerHTML = clockTitleText + ":" + secondsStr;

  bar.style.width = ((60 - seconds) * 2) + "px";


  if (((minutes % frequency == 0) && (seconds < 3)) || (minutes == 0 && seconds < 3)) {

    setTimeout(() => {
      if (isSpeech && (seconds == 0) && (!isTimerActivated)) speechCurrentTime(hour, minutes);
    }, 10);

  }

  if (((minutes % 5 == 0) && (seconds < 10)) || (minutes == 0 && seconds < 10)) {
    if (!isTimerActivated) blinkTitle(clockTitleText, seconds);
  }
}
setInterval(Time, 1000);


window.onload = function () {
  Time();

  const defaultButton = document.getElementById(15);
  defaultButton.style.color = "white";
}


function focusOn(index) {
  const url = [url0, url1, url2];
  const button = [button0, button1, button2];

  url.forEach(elements => elements.style.display = "none");
  button.forEach(elements => elements.style.color = "rgba(255, 255, 255, 0.2)");

  url[index].style.display = "block";
  button[index].style.color = "white";
}





//時報関連
const buttons = document.getElementsByClassName("cf");
const menu = document.getElementById("option");
const muteButton = document.getElementById("mute");

const announce = new Audio("audio/ウエスタンドアを開くと鳴る入店音.mp3");
announce.volume = 0.05;

let isSpeech = true;
let frequency = 15;
let isSmallDisplay = false;
let isPlayed = false;

function changeFrequency(number) {
  frequency = number

  const selectedButton = document.getElementById(number);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = "rgba(255, 255, 255, 0.2)";
  }
  selectedButton.style.color = "white";
}

function mute() {
  if (isSpeech) {
    isSpeech = false;
    muteButton.style.color = "rgba(255, 255, 255, 0.2)";
  } else {
    isSpeech = true;
    muteButton.style.color = "white";
  }
}

function blinkTitle(clockTitleText, seconds) {
  if (seconds % 2 == 0) {
    title.innerHTML = (clockTitleText + " ■■■■■■■");
    icon.href = "2.ico";
  } else {
    title.innerHTML = (clockTitleText + " □□□□□□□");
    icon.href = "1.ico";
  }
}

function speechCurrentTime(hour, minutes) {
  let msg = new SpeechSynthesisUtterance(hour + "時" + minutes + "分です");
  if (minutes == 0) msg = new SpeechSynthesisUtterance(hour + "時です");
  msg.volume = 0.4;
  window.speechSynthesis.speak(msg);
}