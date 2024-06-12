const cardForm = document.querySelector('.hero__form');
console.log(cardForm);
const formInputs = document.querySelectorAll('.hero__form input')
console.log(formInputs);
const errorMsg = document.querySelectorAll('.error-msg');
console.log(errorMsg);
const completedState = document.querySelector('.completed')


cardForm.addEventListener('submit', checkInputs);

function showError(errorElement, errorMessage) {
  errorElement.style.display = "block";
  errorElement.textContent = errorMessage;
}

function formSent(){
  console.log('Form Sent')
}

function checkInputs(event) {
  event.preventDefault();
  let isFormValid = true;

  formInputs.forEach((input) => {
    console.log(`Validating input: ${input.id}, value: ${input.value}`);
    if(input.validity.valueMissing) {
      showError(input.nextElementSibling, "Can't be blank");
      isFormValid = false;
    } else if (input.id === 'card-name' && !/^[a-zA-ZÀ-ÿ\s]+$/.test(input.value)) {
      showError(input.nextElementSibling, "Only letters allowed");
      isFormValid = false;
    } else if (input.validity.tooShort && /[0-9]/.test(input.value)) {
      showError(input.nextElementSibling, "Wrong Format");
      isFormValid = false;
    } else if (/[^0-9]/.test(input.value) && input.id !== 'card-name') {
      showError(input.nextElementSibling, "Wrong format, numbers only");
      isFormValid = false;
    }
  });

  if (isFormValid) {
    cardForm.style.display = 'none';
    completedState.style.display = 'flex';
  }
}