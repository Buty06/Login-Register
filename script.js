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

//?Funcion de cambio de cards
const changeCard = () => {
  $loginCard.classList.toggle("change_card_disappear");
  $signupCard.classList.toggle("change_card_disappear");
  $loginCard.classList.toggle("change_card_appear");
  $signupCard.classList.toggle("change_card_appear");

  setTimeout(() => {
    $signupCard.classList.toggle("display_none");
    $loginCard.classList.toggle("display_none");
  }, 500);
};

//?Logica para el cambio de cartas
$signupButton.addEventListener("click", changeCard);
$loginButton.addEventListener("click", changeCard);

//?Logica para los inputs
const inputLabels = [
  { input: $input1, label: $inputName1 },
  { input: $input2, label: $inputName2 },
  { input: $input3, label: $inputName3 },
  { input: $input4, label: $inputName4 },
  { input: $input5, label: $inputName5 },
];

//* En vez de hacer toggle a la clase, mejor responde al evento
//* de focus(entrada al elemento) y blur (salida)
for (const { input, label } of inputLabels) {
  input.addEventListener("focus", () => {
    label.classList.add("submit_title");
  });

  input.addEventListener("blur", () => {
    if (input.value === '') {
      label.classList.remove("submit_title");  
    }
  });
}
