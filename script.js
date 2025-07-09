function validateform() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');


    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    usernameInput.classList.remove('input-error');
    emailInput.classList.remove('input-error');
    passwordInput.classList.remove('input-error');

    let isValid = true;

    if (username === '') {
        usernameError.textContent = 'Username is required.';
        usernameInput.classList.add('input-error');
        isValid = false;
    }

    if (email === '') {
        emailError.textContent = 'Email is required.';
        emailInput.classList.add('input-error');
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('input-error');
        isValid = false;
    }

    if (password === '') {
        passwordError.textContent = 'Password is required.';
        passwordInput.classList.add('input-error');
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        passwordInput.classList.add('input-error');
        isValid = false;
    }

    if (isValid) {
        
        const loggedUser = {
            username: username,
            email: email
        };
        localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
