//?Variables del DOM que tratan el camio de las cartas
const $loginButton = document.getElementById("change_login");
const $signupButton = document.getElementById("change_signup");
const $signupCard = document.getElementById("card1");
const $loginCard = document.getElementById("card2");

//?Variables del DOM que tratan los cambios en los inputs
const $input1 = document.getElementById("input1");
const $input2 = document.getElementById("input2");
const $input3 = document.getElementById("input3");
const $input4 = document.getElementById("input4");
const $input5 = document.getElementById("input5");
const $inputName1 = document.getElementById("input_name1");
const $inputName2 = document.getElementById("input_name2");
const $inputName3 = document.getElementById("input_name3");
const $inputName4 = document.getElementById("input_name4");
const $inputName5 = document.getElementById("input_name5");

//?Logica para el cambio de cartas
$loginButton.addEventListener("click", () => {
  $signupCard.classList.toggle("display");
  $loginCard.classList.toggle("display");

  // *cuando el contador llegue a 0 se pondra una clase que quitara una card y se le quitara la misma clase a la otra card
  setTimeout(() => {
    $signupCard.classList.toggle("display2");
    $loginCard.classList.toggle("display2");
  }, 1000);
});

$signupButton.addEventListener("click", () => {
  $signupCard.classList.toggle("display");
  $loginCard.classList.toggle("display");

  // *cuando el contador llegue a 0 se pondra una clase que quitara una card y se le quitara la misma clase a la otra card
  setTimeout(() => {
    $signupCard.classList.toggle("display2");
    $loginCard.classList.toggle("display2");
  }, 1000);
});

//?Logica para los inputs
$input1.addEventListener("click", () => {
  $inputName1.classList.toggle("submit_title");
});

$input2.addEventListener("click", () => {
  $inputName2.classList.toggle("submit_title");
});

$input3.addEventListener("click", () => {
  $inputName3.classList.toggle("submit_title");
});

$input4.addEventListener("click", () => {
  $inputName4.classList.toggle("submit_title");
});

$input5.addEventListener("click", () => {
  $inputName5.classList.toggle("submit_title");
});
