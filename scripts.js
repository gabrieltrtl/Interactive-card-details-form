const cardForm = document.querySelector('.hero__form');
console.log(cardForm);
const formInputs = document.querySelectorAll('.hero__form input')
console.log(formInputs);
const errorMsg = document.querySelectorAll('.error-msg');
console.log(errorMsg);


cardForm.addEventListener('submit', checkInputs);

function showError(errorElement, errorMessage) {
  errorElement.style.display = "block";
  errorElement.textContent = errorMessage;
}

function formSent(){
  console.log('Vá pra merda!')
}

function checkInputs(event) {
  event.preventDefault();
  formInputs.forEach((input) => {
    if(input.validity.valueMissing) {
      showError(input.nextElementSibling, "Can't be blank");
    } else if (input.id === 'card-name' && !/^[a-zA-ZÀ-ÿ\s]+$/.test(input.value)) {
      showError(input.nextElementSibling, "Only letters allowed");
    } else if (input.validity.tooShort && /[0-9]/.test(input.value)) {
      showError(input.nextElementSibling, "Invalid Number");
    } else if (/[^0-9]/.test(input.value) && input.id !== 'card-name') {
      showError(input.nextElementSibling, "Wrong format, numbers only");
    }
  })
}