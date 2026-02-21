const frameElementsNoCookie = [
  '<iframe class="frame visible-frame" id="frame-1" src="https://www.youtube-nocookie.com/embed/videoseries?si=H1PtjtGNn_5K2Hl3&amp;list=PL_5OGYEKv3Xkk52A6RN4PafPXA9Vsb4J_&mute=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe class="frame visible-frame" id="frame-2" src="https://www.youtube-nocookie.com/embed/videoseries?si=c3u6QpLR-Cq4RT1m&amp;list=PL_5OGYEKv3XnBZCIG65gkb49G-Bs_fhqT&mute=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe class="frame visible-frame" id="frame-3" src="https://www.youtube-nocookie.com/embed/videoseries?si=U0R3m0_IhjBzd_JF&amp;list=PL_5OGYEKv3XmaxTwU3LxjlSWjGSn_II7t&mute=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe class="frame visible-frame" id="frame-4" src="https://www.youtube-nocookie.com/embed/videoseries?si=5HUsoxOz9XAdLpc6&amp;list=PL_5OGYEKv3Xn3yUqkzMU2MZqPi8H0k7w1&mute=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
];

const frameElementsCookie = [
  '<iframe class="frame visible-frame" id="frame-1" src="https://www.youtube.com/embed/videoseries?si=H1PtjtGNn_5K2Hl3&amp;list=PL_5OGYEKv3Xkk52A6RN4PafPXA9Vsb4J_&mute=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe class="frame visible-frame" id="frame-2" src="https://www.youtube.com/embed/videoseries?si=c3u6QpLR-Cq4RT1m&amp;list=PL_5OGYEKv3XnBZCIG65gkb49G-Bs_fhqT&mute=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe class="frame visible-frame" id="frame-3" src="https://www.youtube.com/embed/videoseries?si=U0R3m0_IhjBzd_JF&amp;list=PL_5OGYEKv3XmaxTwU3LxjlSWjGSn_II7t&mute=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe class="frame visible-frame" id="frame-4" src="https://www.youtube.com/embed/videoseries?si=5HUsoxOz9XAdLpc6&amp;list=PL_5OGYEKv3Xn3yUqkzMU2MZqPi8H0k7w1&mute=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
];

let frameElements = frameElementsNoCookie;


function loadPlaylist(index) {

  switch (index) {
    case 1: {
      frameContainer[1].innerHTML += frameElements[0];
      frameContainer[1].innerHTML += '<img src="assets/icons/asmr_transparent.png" class="frame-icon" id="frame-icon-1">';
      break;
    }

    case 2: {
      frameContainer[2].innerHTML += frameElements[1];
      frameContainer[2].innerHTML += '<img src="assets/icons/ambience_transparent.png" class="frame-icon" id="frame-icon-2">';
      break;
    }

    case 3: {
      frameContainer[3].innerHTML += frameElements[2];
      frameContainer[3].innerHTML += '<img src="assets/icons/dream_transparent.png" class="frame-icon" id="frame-icon-3">';
      break;
    }

    case 4: {
      frameContainer[4].innerHTML += frameElements[3];
      frameContainer[4].innerHTML += '<img src="assets/icons/bgm.png" class="frame-icon" id="frame-icon-4">';
      break;
    }
  }
}


function reloadPlaylist(index) {
  const pl = document.getElementById("frame-" + index);
  const icon = document.getElementById("frame-icon-" + index);

  if(pl) pl.remove();
  if(icon) icon.remove();

  loadPlaylist(index);
}


function switchFrameCookie() {

  setTimeout(() => {

    if (clockEl.cookieModeCheckbox.checked) {
      frameElements = frameElementsCookie;
    } else {
      frameElements = frameElementsNoCookie;
    }

  }, 30);

}