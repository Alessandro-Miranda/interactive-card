/**
 * @param {FocusEvent} e 
 */
function toggleInputGradientClass(e) {
    const input = e.target;

    input.parentElement.classList.toggle('apply-border-gradient');
}