const loadPlaylistASMRButton = document.getElementById("loadPlaylistASMR");
const loadPlaylistAmbienceButton = document.getElementById("loadPlaylistAmbience");

function loadPlaylistASMR() {
  loadPlaylistASMRButton.style.display = "none";
  url1.innerHTML += '<iframe class="frame" width="483" height="271.5" src="https://www.youtube.com/embed/videoseries?si=n7YEAseGMWjuGjm2&amp;list=PLZnhlo4OYILrFBirDDYFQv9QeUkdZXVH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}

function loadPlaylistAmbience() {
  loadPlaylistAmbienceButton.style.display = "none";
  url2.innerHTML += '<iframe class="frame" width="483" height="271.5" src="https://www.youtube.com/embed/videoseries?si=wbHXpDp2NOH4FdQP&amp;list=PLZnhlo4OYILr8yGZMS2dbKPiLJPpdJldB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}
