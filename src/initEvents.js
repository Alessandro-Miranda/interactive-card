(function () {
    window.addEventListener('DOMContentLoaded', initEvents);
})();

function initEvents() {
    initInputGradient();
    initInputKeyupValidation();
    initCompleteButtonEvent();
}

function initInputGradient() {
    const inputs = [...document.querySelectorAll('input')];
        
    inputs.forEach((input) => {
        input.addEventListener('focus', toggleInputGradientClass);
        input.addEventListener('blur', toggleInputGradientClass);
    })
}

function initInputKeyupValidation() {
    const cardNumber = document.querySelector('#card-number');
    const expirationDateMonth = document.querySelector('#exp-date-mm');
    const expirationDateYear = document.querySelector('#exp-date-yy');
    const cvc = document.querySelector('#cvc');

    cardNumber.addEventListener('keyup', validateNumberAndReplaceIfIsAChar);
    expirationDateMonth.addEventListener('keyup', validateNumberAndReplaceIfIsAChar);
    expirationDateYear.addEventListener('keyup', validateNumberAndReplaceIfIsAChar);
    cvc.addEventListener('keyup', validateNumberAndReplaceIfIsAChar);
}

function validateNumberAndReplaceIfIsAChar(event) {
    const input = event.target;

    if (isNaN(input.value)) {
        input.value = input.value.slice(0, -1);
    }
}

function initCompleteButtonEvent() {
    const button = document.querySelector('.js-complete-button');
    const form = document.querySelector('form');
    const completeState = document.querySelector('.js-complete-status');

    button.addEventListener('click', () => {
        completeState.classList.add('hidden');
        form.classList.add('block');
        form.classList.remove('hidden');
    })
}