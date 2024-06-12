const cardForm = document.querySelector('.hero__form');
console.log(cardForm);
const formInputs = document.querySelectorAll('.hero__form input')
console.log(formInputs);
const errorMsg = document.querySelectorAll('.error-msg');
console.log(errorMsg);


cardForm.addEventListener('submit', checkInputs);

function showError(input, errorMessage) {
  errorMsg.forEach((error) => {
    error.style.display = "block";
    error.textContent = errorMessage;
  })
}

function checkInputs(event) {
  event.preventDefault();
  formInputs.forEach((input) => {
    if(input.validity.valueMissing) {
      showError(input, "Can't be blank");
    }
  })
}