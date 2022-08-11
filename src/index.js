/**
 * 
 * @param {FocusEvent} e 
 */
function toggleInputGradientClass(e) {
    const input = e.target;

    input.parentElement.classList.toggle('apply-border-gradient');
}

(function () {
    window.addEventListener('DOMContentLoaded', () => {
        const inputs = [...document.querySelectorAll('input')];
        
        inputs.forEach((input) => {
            input.addEventListener('focus', toggleInputGradientClass);
            input.addEventListener('blur', toggleInputGradientClass);
        })
    })
})();