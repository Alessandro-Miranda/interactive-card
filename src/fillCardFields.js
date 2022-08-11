/**
 * @param {HTMLInputElement} input 
 */
function fillCardFields(input) {
    const value = input.value;
    const inputId = input.id;
    const field = document.querySelector(`.js-${inputId}`);

    if (!value.length) {
        field.textContent = defaultValues(inputId);
        return;
    }

    if (value.length > Number(input.maxLength)) return;
    
    field.textContent = value;
}

/**
 * @param {HTMLInputElement} input 
 */
function fillCardNumberFields(input) {
    const value = input.value;
    const inputId = input.id;
    const fields = document.querySelectorAll(`.js-${inputId}`);

    if (!value.length) {
        const groups = defaultValues(inputId).match(/.{4}/g);
        fields.forEach((field, index) => {
            field.textContent = groups[index];
        }); 
        return;
    }

    if (value.length > Number(input.maxLength)) return;
    
    const groups = fillWithZero(value).match(/.{4}/g);
    fields.forEach((field, index) => {
        field.textContent = groups[index];
    });
}

function fillWithZero(value) {
    return value.padEnd(16, '0');
}

function defaultValues(inputId) {
    switch(inputId) {
        case 'cardholder-name':
            return 'jane appleseed';

        case 'card-number':
            return '0000000000000000';

        case 'exp-date-mm':
            return '00';

        case 'exp-date-yy':
            return '00'

        case 'cvc':
            return '000';
    }
}