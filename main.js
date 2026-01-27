const body = document.getElementById("body");
const tabIcon = document.getElementById("icon");

let windouWidth = window.innerWidth;
let highlightState = false; //boolean

const clockEl = {
  title: document.getElementById("title"),
  clock: document.getElementById("time"),
  bar: document.getElementById("time-bar"),

  buttons: document.getElementsByClassName("cf"),
  menu: document.getElementById("clock-menu"),
  optionButton: document.getElementById("option-button"),
  optionIcon: document.getElementById("option-icon"),
  muteCheckbox: document.getElementById("mute"),
  muteIcon: document.getElementById("mute-icon"),
  volumeBar: document.getElementById("volume-bar"),
  volumeBarLabel: document.getElementById("volume-bar-label"),

  colorableFont: document.querySelectorAll(".colorable-font"),

  visiblePlayerCheckbox: document.getElementById("visible-player"),
  frameCover: document.querySelectorAll(".frame-cover"),

  cookieModeCheckbox: document.getElementById("cookie-mode")
}

let clock = {
  volume: 0,
  isMenuShown: false,
  frequency: 15,
  optionDuration: 0, //設定が開かれている時間(1/5s)
  isHoveringOption: false
}

let time = {
  hour: 0,
  minutes: 0,
  seconds: 0,

  hourStr: 0,
  minutesStr: 0,
  secondsStr: 0
}



//----------



function Time() {
  updateTime();

  const clockTitleText = time.hourStr + ":" + time.minutesStr;
  clockEl.title.textContent = clockTitleText + ":" + time.secondsStr;

  if (!document.hidden && nowPage == 0) updateClockDisplay();

  if (((time.minutes % clock.frequency == 0) || time.minutes == 0) && time.seconds < 11) {
    speechCurrentTime();
    blinkTitle(clockTitleText, time.seconds);

    if (!document.hidden && nowPage == 0 && highlightState == false) {
      highlight();
    }

    return;
  }

  if (time.seconds > 10 && highlightState == true) {
    unhighlight();
  }
}



function updateClockDisplay() {
  const clockText = time.hourStr + "<span class='colon' id='colon'>:</span>" + time.minutesStr;
  const clockTitleText = time.hourStr + ":" + time.minutesStr;
  clockEl.clock.innerHTML = clockText;
  title.innerHTML = clockTitleText + ":" + time.secondsStr;



  clockEl.bar.style.width = ((60 - time.seconds) * 7) + "px";
  if (time.seconds < 11) {
    clockEl.bar.classList.add("bloom");
  } else {
    clockEl.bar.classList.remove("bloom");
  }

  const colon = document.getElementById("colon");
  if (time.seconds % 2 == 0) {
    colon.style.opacity = "100%";
  } else {
    colon.style.opacity = "50%";
  }
}



function blinkTitle(clockTitleText, seconds) {
  if (seconds % 2 == 1) {
    title.textContent = (clockTitleText + " ■■■■■■■■");
    tabIcon.href = "mg_icon_aqua.ico";
  } else {
    title.textContent = (clockTitleText + " □□□□□□□□");
    tabIcon.href = "mg_icon.ico";
  }
}



function speechCurrentTime() {

  setTimeout(() => {
    if ((time.seconds == 0) && (!clockEl.muteCheckbox.checked)) {

      let msg = new SpeechSynthesisUtterance(+time.hour + "時、" + time.minutes + "分、です");
      if (time.minutes == 0) msg = new SpeechSynthesisUtterance(+time.hour + "時、ちょうど、です");

      msg.volume = clock.volume;
      window.speechSynthesis.speak(msg);

    }
  }, 10);

}



function highlight() {
  body.classList.add("highlight");
  clockEl.bar.classList.add("highlight");
  clockEl.optionIcon.classList.add("highlight");
  clockEl.muteIcon.classList.add("highlight");

  clockEl.colorableFont.forEach(el => {
    el.classList.add("highlight");
  });

  highlightState = true;
}



function unhighlight() {
  body.classList.remove("highlight");
  clockEl.bar.classList.remove("highlight");
  clockEl.optionIcon.classList.remove("highlight");
  clockEl.muteIcon.classList.remove("highlight");

  clockEl.colorableFont.forEach(el => {
    el.classList.remove("highlight");
  });

  highlightState = false;
}



function changeFrequency(number) {
  clock.frequency = number;

  try {
    const selectedButton = document.getElementById(number);
    for (let i = 0; i < clockEl.buttons.length; i++) {
      clockEl.buttons[i].style.opacity = "40%";
    }
    selectedButton.style.opacity = "100%";
  } catch (e) { }

  return clock.frequency;
}



//音量を変更する
function setVolume() {
  console.log("setvolume ran");
  const volume = clockEl.volumeBar.value;
  clockEl.volumeBarLabel.textContent = ("Volume: " + volume + "%");

  if (clockEl.muteCheckbox.checked) {
    clock.volume = 0;
  } else {
    clock.volume = volume * 0.01;
  }
}



//ミュート設定
function setMute() {
  console.log("setmute ran");
  if ((clockEl.muteCheckbox.checked && clockEl.muteIcon.alt == "Muted") || (!clockEl.muteCheckbox.checked && clockEl.muteIcon.alt == "Unmuted")) return;

  if (clockEl.muteCheckbox.checked) {
    clockEl.volumeBar.style.opacity = "20%";
    clockEl.volumeBarLabel.style.opacity = "20%";
    clockEl.bar.style.opacity = "40%";
    clockEl.muteIcon.src = "img/muted.png"
    clockEl.muteIcon.alt = "Muted";
  } else {
    clockEl.volumeBar.style.opacity = "100%";
    clockEl.volumeBarLabel.style.opacity = "100%";
    clockEl.bar.style.opacity = "100%";
    clockEl.muteIcon.src = "img/unmuted.png";
    clockEl.muteIcon.alt = "Unmuted";
  }
}



function switchMenu() { //メニューの表示/非表示を切り替える

  if (clock.isMenuShown == true) {
    clock.isMenuShown = false;

    clockEl.optionIcon.style.rotate = "0deg";
    clockEl.optionIcon.style.opacity = "40%";

    clockEl.menu.style.filter = "opacity(0%)";
    clockEl.menu.style.pointerEvents = "none";

  } else {

    clock.isMenuShown = true;

    clockEl.optionIcon.style.rotate = "90deg";
    clockEl.optionIcon.style.opacity = "100%";

    clockEl.menu.style.filter = "opacity(100%)";
    clockEl.menu.style.pointerEvents = "auto";
  }

}



function updateTime() {
  const realTime = new Date();

  time = {
    hour: realTime.getHours(),
    minutes: realTime.getMinutes(),
    seconds: realTime.getSeconds(),

    hourStr: String(realTime.getHours()).padStart(2, '0'),
    minutesStr: String(realTime.getMinutes()).padStart(2, '0'),
    secondsStr: String(realTime.getSeconds()).padStart(2, '0')
  }

}



function autoCloseMenu() {

  if (!clock.isMenuShown) return;

  if (clock.isHoveringOption) {
    clock.optionDuration = 0;
    return;
  }


  clock.optionDuration++;
  if (clock.optionDuration > 20) {
    switchMenu();
    clock.optionDuration = 0;
  }

}



function switchFrameFilter() {
  const el = document.querySelectorAll(".frame");

  setTimeout(() => {

    if (clockEl.visiblePlayerCheckbox.checked) {
      el.forEach(el => {
        el.classList.add("visible-frame");
      });
    } else {
      el.forEach(el => {
        el.classList.remove("visible-frame");
      });
    }

  }, 30);
}



function disableCover() {

  clockEl.frameCover.forEach(el => {
    el.style.pointerEvents = "none";
    el.style.opacity = "100%";
    el.style.color = "red";
  });

  setTimeout(() => {
    clockEl.frameCover.forEach(el => {
      el.style.pointerEvents = "inherit";
      el.style.opacity = "0%";
    });
  }, 1000);
}



//----------



document.body.addEventListener(
  "keydown",
  (ev) => {
    //ミュート[M]
    if (ev.code == "KeyM") {
      if (clockEl.muteCheckbox.checked) {
        clockEl.muteCheckbox.checked = false;
      } else {
        clockEl.muteCheckbox.checked = true;
      }
      setMute();
      return;
    }

    if (ev.code == "KeyO") {
      switchMenu();
      return;
    }
  },
  { once: false }
);


clockEl.menu.addEventListener("mouseenter", () => { clock.isHoveringOption = true });
clockEl.menu.addEventListener("mouseleave", () => { clock.isHoveringOption = false });


window.onload = function () {
  Time();
  const defaultButton = document.getElementById(clock.frequency);
  defaultButton.style.opacity = "100%";

  const waitms = (1030 - (new Date().getMilliseconds));
  setTimeout(() => {
    setInterval(Time, 1000);
  }, waitms);
}



//----------



clockEl.volumeBar.addEventListener("change", setVolume);
clockEl.muteCheckbox.addEventListener("change", setMute);
setInterval(autoCloseMenu, 1000);
