document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const showElementsControl = document.querySelectorAll('button');
    showElementsControl.forEach(button => button.addEventListener('click', handleControlShow));

    function handleControlShow(e) {
        const fullProfileDivElement = e.target.closest('.profile');
        const lockedRadioButton = fullProfileDivElement.querySelector('input[type="radio"][id$="Lock"]');

        if (lockedRadioButton.checked) {
            return;
        }

        const hiddenFields = fullProfileDivElement.querySelector('.hidden-fields');

        if (hiddenFields.style.display === 'block') {
            hiddenFields.style.display = 'none';
            e.target.textContent = 'Show more';
        } else {
            hiddenFields.style.display = 'block';
            e.target.textContent = 'Show less';
        }
    }
}
