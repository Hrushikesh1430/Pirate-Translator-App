// var user_name = prompt("Enter your name");

// alert("hello" + user_name);

var user_input = document.querySelector("#my_text");
var submit = document.querySelector("#my_button");
var output = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/pirate.json";

submit.addEventListener("click", submitHandler);

function url_concat(input) {
  return url + "?" + "text=" + input;
}

function submitHandler() {
  fetch(url_concat(user_input.value))
    .then((response) => response.json())
    .then((result) => (output.innerHTML = result.contents.translated))
    .catch((error) => console.log(error));
}
