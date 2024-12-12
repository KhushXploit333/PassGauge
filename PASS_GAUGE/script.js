const passwordInput = document.getElementById('password');
const strengthIndicator = document.getElementById('strength-indicator');
const feedback = document.getElementById('feedback');
const regexAnimation = document.getElementById('regex-animation');
const lengthAnimation = document.getElementById('length-animation');
const uppercaseAnimation = document.getElementById('uppercase-animation');
const lowercaseAnimation = document.getElementById('lowercase-animation');
const numberAnimation = document.getElementById('number-animation');
const specialAnimation = document.getElementById('special-animation');

passwordInput.addEventListener('input', checkPasswordStrength);

function checkPasswordStrength() {
    const password = passwordInput.value;
    let strength = 0;

    // Check length
    if (password.length >= 8) {
        strength += 1;
        lengthAnimation.classList.add('active');
    } else {
        lengthAnimation.classList.remove('active');
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength += 1;
        uppercaseAnimation.classList.add('active');
    } else {
        uppercaseAnimation.classList.remove('active');
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strength += 1;
        lowercaseAnimation.classList.add('active');
    } else {
        lowercaseAnimation.classList.remove('active');
    }

    // Check for numbers
    if (/\d/.test(password)) {
        strength += 1;
        numberAnimation.classList.add('active');
    } else {
        numberAnimation.classList.remove('active');
    }

    // Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) {
        strength += 1;
        specialAnimation.classList.add('active');
    } else {
        specialAnimation.classList.remove('active');
    }

    // Update strength indicator
    if (strength === 0) {
        strengthIndicator.className = 'weak';
        feedback.textContent = 'Password is too weak';
    } else if (strength <= 2) {
        strengthIndicator.className = 'medium';
        feedback.textContent = 'Password is medium strength';
    } else {
        strengthIndicator.className = 'strong';
        feedback.textContent = 'Password is strong';
    }
}