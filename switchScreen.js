const menu = document.getElementById("menu");
let hideMenu = 0;

let nowPage = 0 //0,1,2,3,4
const url = [];
const button = [];
const playlistGlobal = document.getElementById("playlist-global");

for (let i = 0; i < 5; i++) {
  url[i] = document.getElementById("url-" + i);
  button[i] = document.getElementById("focus-" + i);
}


function focusOn(index) {
  nowPage = index;

  url.forEach(elements => elements.style.display = "none");
  button.forEach(elements => elements.style.opacity = "20%");

  url[index].style.display = "block";
  button[index].style.opacity = "100%";

  playlistGlobal.style.visibility = (index == 0) ? "hidden" : "visible";
}




let swipeStartX = 0;
let swipeEndX = 0;

window.addEventListener('touchstart', (ev) => { swipeStartX = ev.touches[0].clientX; });

window.addEventListener('touchmove', (ev) => { swipeEndX = ev.touches[0].clientX; });

window.addEventListener('touchend', () => {

  const diff = swipeEndX - swipeStartX;

  if (Math.abs(diff) > 30) {
    if (diff > 0) {
      if (nowPage == 0) return;
      focusOn(nowPage - 1);

    } else {
      if (nowPage == 4) return;
      focusOn(nowPage + 1);

    }
  }
});


let wheelEventStep = 0;
let wheelPowerX = 0

window.addEventListener('wheel', (ev) => {
  wheelPowerX = Math.floor(Math.abs(Math.pow(ev.deltaX, 25) * Math.pow(0.1, 42)));

  if ((wheelPowerX !== 0) && (wheelEventStep == 0)) {

    console.log("nowPage: " + nowPage);
    console.log(wheelPowerX);

    wheelEventStep = 1;

    if (ev.deltaX < 0) { //左方向
      if (nowPage == 0) return;
      focusOn(nowPage - 1);

    } else {
      if (nowPage == 4) return;
      focusOn(nowPage + 1);
    }

    showMenu();
  }
});


/*
setInterval(() => {
  if (wheelPowerX == 0) wheelEventStep = 0;
  console.log("wheelPowerX: " + wheelPowerX);
}, 100);
*/



function showMenu() {
  menu.classList.add("menu-shown");
  
  if(hideMenu) clearTimeout(hideMenu);

  hideMenu = setTimeout(() => {
    menu.classList.remove("menu-shown")
  }, 1000);
}