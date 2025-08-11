const loadPlaylistASMRButton = document.getElementById("loadPlaylistASMR");
const loadPlaylistAmbienceButton = document.getElementById("loadPlaylistAmbience");

function loadPlaylistASMR() {
  loadPlaylistASMRButton.style.display = "none";
  url1.innerHTML += '<iframe class="frame" id="frame-a" width="483" height="271.5" src="https://www.youtube-nocookie.com/embed/videoseries?si=n7YEAseGMWjuGjm2&amp;list=PLZnhlo4OYILrFBirDDYFQv9QeUkdZXVH4&mute=1&modestbranding=0&fs=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}

function loadPlaylistAmbience() {
  loadPlaylistAmbienceButton.style.display = "none";
  url2.innerHTML += '<iframe class="frame" id="frame-b" width="483" height="271.5" src="https://www.youtube-nocookie.com/embed/videoseries?si=wbHXpDp2NOH4FdQP&amp;list=PLZnhlo4OYILr8yGZMS2dbKPiLJPpdJldB&mute=1&modestbranding=0&fs=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}
