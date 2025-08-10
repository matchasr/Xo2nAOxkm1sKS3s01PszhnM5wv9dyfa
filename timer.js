const clock = {
  tabTitle: document.getElementById("title"),
  timeText: document.getElementById("timer-clock"),
  timerBar: document.getElementById("timer-bar"),
  
  pauseButton: document.getElementById("pause"),
  resumeButton: document.getElementById("resume"),
  resetButton: document.getElementById("reset"), //終了ボタン
};

const shortcuts = {
  div: document.getElementById("shortcuts"),
  buttons: document.getElementsByClassName("timer-quick-start")
};

const autoStopCheckbox = document.getElementById("auto-stop");
const volumeBar = document.getElementById("volume-bar");
const volumeBarLabel = document.getElementById("volume-bar-label");

const alarm = new Audio("audio/alarm.m4a");
alarm.volume = 1;

let isTimerActivated = false;
let remainingSeconds = 0;
let max = 0;
let startedTime = Date.now();
let errorCount = 0;




setInterval(Timer,1000);
setInterval(setVolume, 30)

//タイマーの処理
function Timer() {
  if (!isTimerActivated) return; //タイマーが動いていないなら終了

  remainingSeconds--;
  const realTimeSeconds = new Date().getSeconds();


  if (remainingSeconds>0) {
  const minutesStr = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
  const secondsStr = String(remainingSeconds % 60).padStart(2, '0');

  if (remainingSeconds%5 == 0) checkDifference(); //5秒おきに誤差を調べる
  updateClockDisplay(minutesStr, secondsStr, realTimeSeconds); //時計の表示を変更する

  return; //残り時間が1秒以上ならここで終了
}


//残り時間が0以下になったら以下を実行
  clock.timeText.innerHTML = "00:00";
  clock.timerBar.style.width = "0px";

  if (realTimeSeconds % 2 == 0) {
    clock.tabTitle.innerHTML = "■■■■■■■■■■■■■■■";
    alarm.play();

  } else {
    clock.tabTitle.innerHTML = "□□□□□□□□□□□□□□□";
  }
}

document.body.addEventListener(
  "keydown",
  ()=>{
    if ((remainingSeconds<1) && (isTimerActivated)) reset();
  },
  {once: false}
);


function checkDifference() {
    const timeNow = Date.now();
    passedSeconds = (startedTime-timeNow)/1000
    const difference = Math.floor(remainingSeconds-passedSeconds)-max;

    if (Math.abs(difference)>2) {
      errorCount++;
      remainingSeconds = remainingSeconds-difference;
    }
}

function updateClockDisplay(minutesStr, secondsStr, realTimeSeconds) {
  const clockText = minutesStr+"<span class='colon' id='colon'>:</span>"+secondsStr;

  let titleText = (minutesStr+":"+secondsStr+" Left");

  clock.timeText.innerHTML = clockText;
  clock.tabTitle.innerHTML = titleText;

  clock.timerBar.style.width = ((remainingSeconds/max)*500) + "px";
  const colon = document.getElementById("colon");

  if (realTimeSeconds%2 == 0) {
    colon.style.color = "#ffffffff";
  } else {
    colon.style.color = "#ffffff98";
  }
}


/**
 * タイマーを開始する
 * @param {number} timeLeft 
 */
function start(timeLeft) {
  remainingSeconds = timeLeft;
  max = timeLeft;
  isTimerActivated = true;

  const minutesStr = String(Math.floor(timeLeft / 60));
  const secondsStr = String(timeLeft % 60).padStart(2, '0');

  clock.timeText.innerHTML = minutesStr.padStart(2, '0')+":"+secondsStr;
  clock.tabTitle.innerHTML = minutesStr.padStart(2, '0')+":"+secondsStr+" Left";
  clock.timerBar.style.width = 500 + "px";

  shortcuts.div.style.display = "none";
  /*
  for (let i = 0; i < shortcuts.buttons.length; i++) {shortcuts.buttons
    shortcuts.buttons[i].style.color = "transparent";
    shortcuts.buttons[i].style.filter = "blur(10px)";
  }
  setTimeout(() => {
    shortcuts.div.style.display = "none";
  }, 300);
  */

  clock.pauseButton.style.display = "inline-block";
  clock.timeText.style.color = "white";
}

//一時停止
function pause() {
  isTimerActivated = false;

  if (remainingSeconds<1) { //タイマーが鳴っていれば終了する
    reset();
    return;
  }

  clock.resumeButton.style.display = "inline-block";
  clock.resetButton.style.display = "inline-block";
  clock.pauseButton.style.display = "none";

  const minutesStr = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
  const secondsStr = String(remainingSeconds % 60).padStart(2, '0');
  clock.tabTitleinnerHTML = minutesStr+":"+secondsStr+" ■PAUSED■";
}


//再開
function resume() {
  isTimerActivated = true;

  clock.resumeButton.style.display = "none";
  clock.resetButton.style.display = "none";
  clock.pauseButton.style.display = "inline-block";
}

//タイマーを終了
function reset() {
  isTimerActivated = false;
  remainingSeconds = 0;
  
  clock.timeText.innerHTML = "00:00";
  clock.timerBar.style.width = "0px";

  clock.timeText.style.color = "transparent";

  shortcuts.div.style.display = "flex";

  /*
  for (let i = 0; i < shortcuts.buttons.length; i++) {
    shortcuts.buttons[i].style.color = "white";
    shortcuts.buttons[i].style.filter = "blur(0px)";
  }
    */

  setTimeout(() => {
    clock.pauseButton.removeAttribute("style");
    clock.resumeButton.removeAttribute("style");
    clock.resetButton.removeAttribute("style");
  }, 1);
}

//音量を変更する
function setVolume() {
  const volume = volumeBar.value;
  volumeBarLabel.innerHTML = ("Volume: "+volume+"%");
  alarm.volume = volume*0.01;
}