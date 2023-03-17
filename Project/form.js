// —————————— Functionality for form submission ——————————
const emailInput = document.querySelector('#emailInput');
const textInput = document.querySelector('#contact__form__textarea');

console.log(emailInput);
console.log(textInput);

emailInput.addEventListener('focusout', e => {
    clearPreviousSiblingTextField(emailInput);

    if(!validateEmail(emailInput.value)) {
        displayErrorMessage(emailInput, 'Invalid email. Does not follow format; email@example.com');
    }
})

textInput.addEventListener('focusout', e => {
    clearPreviousSiblingTextField(textInput);

    if(!validateText(textInput.value)) {
        displayErrorMessage(textInput, 'No message typed');
    }
})

/* 
    Email validation regex:
    https://www.w3resource.com/javascript/form/email-validation.php
*/
const validateEmail = mail => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) ? true : false;
}

// Checking if the textarea is empty or not
const validateText = text => {
    return text.length > 0 ? true : false;
}

const clearPreviousSiblingTextField = element => {
    element.previousElementSibling.innerHTML = '';
}

const displayErrorMessage = (node, message) => {
    node.previousElementSibling.innerHTML = message;
}

// —————————— Functionality for dialog box (pop-up) ——————————

const form = document.querySelector('.contact__form');
const modal = document.querySelector('.contact__form__dialog');
const modalClose = document.querySelector('.contact__form__dialog__close-button');


form.addEventListener('submit', e => {
    // Preventing the page from refreshing
    e.preventDefault();

    // Using showmodal to show dialog box as modal
    modal.showModal();

    // Clearing form manaully since preventing default
    form.reset();
})

modalClose.addEventListener('click', () => {
    modal.close();
})