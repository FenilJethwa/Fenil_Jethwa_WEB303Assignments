const form = document.getElementById('form');
const username = document.getElementById('username');
const emailaddress = document.getElementById('emailaddress');
const password = document.getElementById('password');
const password_2 = document.getElementById('password_2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}


const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const isValidEmail = emailaddress => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailaddressValue = emailaddress.value.trim();
    const passwordValue = password.value.trim();
    const password_2Value = password_2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }


    if(emailaddressValue === '') {
        setError(emailaddress, 'Email is required');
    } else if (!isValidEmail(emailaddressValue)) {
        setError(emailaddress, 'Provide a valid email address');
    } else {
        setSuccess(emailaddress);
    }


    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 12 ) {
        setError(password, 'Password must be at least 12 character.')
    } else {``
        setSuccess(password);
    }


    if(password_2Value === '') {
        setError(password_2, 'Password is required');
    } else if (password_2Value.length < 12 ) {
        setError(password_2, 'Password must be at least 12 character.')
    } else  {
        setSuccess(password_2);
    }


};
