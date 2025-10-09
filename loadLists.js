const loadPlaylistASMRButton = document.getElementById("loadPlaylistASMR");
const loadPlaylistAmbienceButton = document.getElementById("loadPlaylistAmbience");
const loadPlaylistDreamButton = document.getElementById("loadPlaylistDream");
const loadPlaylistBGMButton = document.getElementById("loadPlaylistBGM");


function loadPlaylist(index) {
  switch (index) {
    case 1: {
      loadPlaylistASMRButton.style.display = "none";
      url[1].innerHTML += '<iframe class="frame" id="frame-a" width="483" height="271.5" src="https://www.youtube-nocookie.com/embed/videoseries?si=H1PtjtGNn_5K2Hl3&amp;list=PL_5OGYEKv3Xkk52A6RN4PafPXA9Vsb4J_&mute=1&modestbranding=0&fs=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      url[1].innerHTML += '<img src="assets/icons/asmr_transparent.png" class="frame-icon">';
      break;
    }

    case 2: {
      loadPlaylistAmbienceButton.style.display = "none";
      url[2].innerHTML += '<iframe class="frame" id="frame-b" width="483" height="271.5" src="https://www.youtube-nocookie.com/embed/videoseries?si=c3u6QpLR-Cq4RT1m&amp;list=PL_5OGYEKv3XnBZCIG65gkb49G-Bs_fhqT&mute=1&modestbranding=0&fs=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      url[2].innerHTML += '<img src="assets/icons/ambience_transparent.png" class="frame-icon">';
      break;
    }

    case 3: {
      loadPlaylistDreamButton.style.display = "none";
      url[3].innerHTML += '<iframe class="frame" id="frame-b" width="483" height="271.5" src="https://www.youtube-nocookie.com/embed/videoseries?si=U0R3m0_IhjBzd_JF&amp;list=PL_5OGYEKv3XmaxTwU3LxjlSWjGSn_II7t&mute=1&modestbranding=0&fs=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      url[3].innerHTML += '<img src="assets/icons/dream_transparent.png" class="frame-icon">';
      break;
    }

    case 4 : {
      loadPlaylistBGMButton.style.display = "none";
      url[4].innerHTML += '<iframe class="frame" id="frame-b" width="483" height="271.5" src="https://www.youtube-nocookie.com/embed/videoseries?si=5HUsoxOz9XAdLpc6&amp;list=PL_5OGYEKv3Xn3yUqkzMU2MZqPi8H0k7w1&mute=1&modestbranding=0&fs=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      url[4].innerHTML += '<img src="assets/icons/bgm.png" class="frame-icon">';
      break;
    }
  }
}