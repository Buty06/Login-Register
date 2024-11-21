const $loginButton = document.getElementById("change_login");
const $signupButton = document.getElementById("change_signup");
const $signupCard = document.getElementById("card1");
const $loginCard = document.getElementById("card2");

$loginButton.addEventListener("click", () => {
  $signupCard.classList.toggle("display");
  $loginCard.classList.toggle("display");

  setTimeout(() => {
    $signupCard.classList.toggle("display2");
    $loginCard.classList.toggle("display2");
    $signupCard.classList.toggle("display3");
    $loginCard.classList.toggle("display3");
  }, 500);
});

$signupButton.addEventListener("click", () => {
  $signupCard.classList.toggle("display");
  $loginCard.classList.toggle("display");

  setTimeout(() => {
    $signupCard.classList.toggle("display2");
    $loginCard.classList.toggle("display2");
    $signupCard.classList.toggle("display3");
    $loginCard.classList.toggle("display3");
  }, 500);
});
