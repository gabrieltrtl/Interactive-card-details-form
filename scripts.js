const cardForm = document.querySelector('.hero__form');
console.log(cardForm);
const formInputs = document.querySelectorAll('.hero__form input')
console.log(formInputs);


cardForm.addEventListener('submit', checkInputs);

function showError(errorMessage) {
  
}

function checkInputs(event) {
  formInputs.forEach((input) => {
    if(input.validity.valueMissing) {
      showError("Can't be blank");
    }
  })
  event.preventDefault();
}