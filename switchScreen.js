

const url = [];
const button = [];

for (let i = 0; i < 5; i++) {
  url[i] = document.getElementById("url-"+i);
  button[i] = document.getElementById("focus-"+i);
}
const playlistGlobal = document.getElementById("playlist-global");


function focusOn(index) {
  url.forEach(elements => elements.style.display = "none");
  button.forEach(elements => elements.style.opacity = "20%");

  url[index].style.display = "block";
  button[index].style.opacity = "100%";

  playlistGlobal.style.visibility = (index == 0) ? "hidden" : "visible";
}

