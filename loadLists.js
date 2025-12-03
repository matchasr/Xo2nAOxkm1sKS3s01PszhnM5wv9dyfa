const loadPlaylistASMRButton = document.getElementById("loadPlaylistASMR");
const loadPlaylistAmbienceButton = document.getElementById("loadPlaylistAmbience");
const loadPlaylistDreamButton = document.getElementById("loadPlaylistDream");
const loadPlaylistBGMButton = document.getElementById("loadPlaylistBGM");

let loadButton = [];
let reloadButton = [];
for (let i = 1; i < 5; i++) {
  loadButton[i] = document.getElementById("loadPlaylistBtn-" + i);
  reloadButton[i] = document.getElementById("reloadPlaylistBtn-" + i);
}


function reDefineElements() {
  for (let i = 1; i < 5; i++) {
    loadButton[i] = document.getElementById("loadPlaylistBtn-" + i);
    reloadButton[i] = document.getElementById("reloadPlaylistBtn-" + i);
  }
}


function loadPlaylist(index) {
  console.log(typeof index)
  loadButton[index].style.display = "none";
  reloadButton[index].style.display = "flex";

  switch (index) {
    case 1: {
      url[1].innerHTML += '<iframe class="frame visible-frame" id="frame-1" width="483" height="271.5" src="https://www.youtube-nocookie.com/embed/videoseries?si=H1PtjtGNn_5K2Hl3&amp;list=PL_5OGYEKv3Xkk52A6RN4PafPXA9Vsb4J_&mute=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      url[1].innerHTML += '<img src="assets/icons/asmr_transparent.png" class="frame-icon" id="frame-icon-1">';
      break;
    }

    case 2: {
      url[2].innerHTML += '<iframe class="frame visible-frame" id="frame-2" width="483" height="271.5" src="https://www.youtube-nocookie.com/embed/videoseries?si=c3u6QpLR-Cq4RT1m&amp;list=PL_5OGYEKv3XnBZCIG65gkb49G-Bs_fhqT&mute=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      url[2].innerHTML += '<img src="assets/icons/ambience_transparent.png" class="frame-icon" id="frame-icon-2">';
      break;
    }

    case 3: {
      url[3].innerHTML += '<iframe class="frame visible-frame" id="frame-3" width="483" height="271.5" src="https://www.youtube-nocookie.com/embed/videoseries?si=U0R3m0_IhjBzd_JF&amp;list=PL_5OGYEKv3XmaxTwU3LxjlSWjGSn_II7t&mute=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      url[3].innerHTML += '<img src="assets/icons/dream_transparent.png" class="frame-icon" id="frame-icon-3">';
      break;
    }

    case 4: {
      url[4].innerHTML += '<iframe class="frame visible-frame" id="frame-4" width="483" height="271.5" src="https://www.youtube-nocookie.com/embed/videoseries?si=5HUsoxOz9XAdLpc6&amp;list=PL_5OGYEKv3Xn3yUqkzMU2MZqPi8H0k7w1&mute=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      url[4].innerHTML += '<img src="assets/icons/bgm.png" class="frame-icon" id="frame-icon-4">';
      break;
    }
  }
}


function reloadPlaylist(index) {
  reDefineElements();
  const pl = document.getElementById("frame-" + index);
  const icon = document.getElementById("frame-icon-" + index);

  pl.remove();
  icon.remove();

  loadPlaylist(index);
}