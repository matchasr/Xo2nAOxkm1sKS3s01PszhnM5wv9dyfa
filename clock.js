let showClock;

const sideClock = {
    container: document.getElementById("clock-container"),
    time: document.getElementById("clock-time"),
    date: document.getElementById("clock-date"),
  }


function updateClock() {
  if (document.hidden) return;

  const dayName = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."]
  const realTime = new Date();
  
  const hours = String(realTime.getHours()).padStart(2, '0');
  const minutes = String(realTime.getMinutes()).padStart(2, '0');
  const month = String(realTime.getMonth()+1).padStart(2, '0');
  const date = String(realTime.getDate()).padStart(2, '0');
  const day = realTime.getDay();

  sideClock.time.textContent = (hours+":"+minutes);
  sideClock.date.textContent = (month+"/"+date+" "+dayName[day]);
}


function resetAFKTime() { //操作があると実行される関数
  clearTimeout(showClock);
  sideClock.container.classList.remove("shown");

  showClock = setTimeout(() => {
    if(nowPage !== 0) sideClock.container.classList.add("shown");
  }, 2000);
}



//--------------------



["mousemove", "keydown", "click", "scroll"].forEach(ev => {
  window.addEventListener(ev, resetAFKTime);
});



//--------------------



setInterval(updateClock, 1000);
resetAFKTime();