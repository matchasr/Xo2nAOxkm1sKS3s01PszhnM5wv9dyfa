const menu = document.getElementById("menu");
let hideMenu = 0;

let nowPage = 0 //0,1,2,3,4
const frameContainer = [];
const url = [];
const button = [];
const playlistGlobal = document.getElementById("playlist-global");

for (let i = 0; i < 5; i++) {
  frameContainer[i] = document.getElementById("fc-" + i);
  url[i] = document.getElementById("url-" + i);
  button[i] = document.getElementById("focus-" + i);
}


function focusOn(index) {
  nowPage = index;

  url.forEach(elements => elements.classList.remove("tab-shown"));
  button.forEach(elements => elements.classList.remove("tab-button-selected"));

  url[index].classList.add("tab-shown");
  button[index].classList.add("tab-button-selected");
}