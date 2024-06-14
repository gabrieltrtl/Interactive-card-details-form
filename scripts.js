const cardForm = document.querySelector('.hero__form');
const formInputs = document.querySelectorAll('.hero__form input')
const errorMsg = document.querySelectorAll('.error-msg');
const completedState = document.querySelector('.completed')
const expErrorMsg = cardForm.querySelector('.error-msg[data-for="exp-date"]');



cardForm.addEventListener('submit', checkInputs);

function showError(errorElement, errorMessage) {
  errorElement.style.display = "block";
  errorElement.textContent = errorMessage;
}

function hideError(errorElement) {
  if (errorElement) {
    errorElement.style.display = "none";
  }
}


function checkInputs(event) {
  event.preventDefault();
  let isFormValid = true;
  let expDateError = false;

  formInputs.forEach((input) => {
    const errorElement = cardForm.querySelector(`.error-msg[data-for="${input.id}"]`) || (input.id === 'exp-month' || input.id === 'exp-year' ? expErrorMsg : null);
    let errorMessage = "";

    if(input.validity.valueMissing) {
      errorMessage = "Can't be Blank";
      isFormValid = false;
    } else if ((input.id === 'exp-month' || input.id === 'exp-year') && (input.value.length !== 2 || isNaN(input.value))) {
      errorMessage = "Wrong format";
      expDateError = true;
      isFormValid = false; 
    } else if (input.id === 'card-name' && !/^[a-zA-ZÀ-ÿ\s]+$/.test(input.value)) {
      errorMessage = "Only letters allowed";
      isFormValid = false;
    } else if (input.validity.tooShort && /[0-9]/.test(input.value)) {
      errorMessage = "Wrong Format";
      isFormValid = false;
    } else if (/^\d+$/.test(input.value) === false && input.id !== 'card-name') {
      errorMessage = "Wrong format, numbers only";
      isFormValid = false;
    } else {
      hideError(errorElement);
    }

    if (errorMessage) {
      showError(errorElement, errorMessage);
    }
  });

  if (expDateError) {
    showError(expErrorMsg, "Wrong Format");
  } else {
    hideError(expErrorMsg);
  }

  if (isFormValid) {
    cardForm.style.display = 'none';
    completedState.style.display = 'flex';
  }
}