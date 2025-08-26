const url0 = document.getElementById("url-0");
const url1 = document.getElementById("url-1");
const url2 = document.getElementById("url-2");
const url3 = document.getElementById("url-3");
const button0 = document.getElementById("focus-0");
const button1 = document.getElementById("focus-1");
const button2 = document.getElementById("focus-2");
const button3 = document.getElementById("focus-3");


function focusOn(index) {
  const url = [url0, url1, url2, url3];
  const button = [button0, button1, button2, button3];

  url.forEach(elements => elements.style.display = "none");
  button.forEach(elements => elements.style.opacity = "20%");

  url[index].style.display = "block";
  button[index].style.opacity = "100%";
}

