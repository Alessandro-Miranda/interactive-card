function submitCard() {
    const cardHolderName = document.querySelector('#cardholder-name');
    const cardNumber = document.querySelector('#card-number');
    const expirationDateMonth = document.querySelector('#exp-date-mm');
    const expirationDateYear = document.querySelector('#exp-date-yy');
    const cvc = document.querySelector('#cvc');
    
    if (isEmpty(cardHolderName.value)) {
        inputError(cardHolderName);
        return;
    }

    if (isEmpty(cardNumber.value)) {
        inputError(cardNumber);
        return;
    }

    if (isEmpty(expirationDateMonth.value)) {
        inputError(expirationDateMonth);
        return;
    }
    
    if (isEmpty(expirationDateYear.value)) {
        inputError(expirationDateYear);
        return;
    }
    
    if (isEmpty(cvc.value)) {
        inputError(cvc);
        return;
    }

    const form = document.querySelector('form');
    const completeState = document.querySelector('.js-complete-status');

    form.classList.add('hidden');
    form.reset();
    completeState.classList.remove('hidden');
    completeState.classList.add('block');
}

function isEmpty(inputValue) {
    return inputValue.length === 0;
}

/**
 * @param {HTMLInputElement} input 
 */
function inputError(input) {
    input.parentElement.classList.add('input-invalid');
    const inputId = input.id;
    
    document.querySelector(`.js-error-${inputId}`).classList.add('block');
    document.querySelector(`.js-error-${inputId}`).classList.remove('hidden');
}