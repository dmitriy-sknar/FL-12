let email, password, oldPass, newPass, newValidPass, minEmailLength = 5, minPassLength = 6;

email = prompt('Please, enter your email');
if (email === null || email === '') {
    alert('Canceled');
} else if (email.length < minEmailLength) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (!(email === 'user@gmail.com') || !(email === 'admin@gmail.com')) {
    alert('I don’t know you');
}

password = prompt('Please, enter your password');
if (email === 'user@gmail.com' && password !== 'UserPass' 
|| email === 'admin@gmail.com' && password !== 'AdminPass') {
    alert('Wrong password');
}

if (!confirm('Do you want to change your password?')) {
    alert('You have failed the change.');
}

oldPass = prompt('Please, enter your old password');
if (oldPass === null || oldPass === '') {
    alert('Canceled');
}

if (email === 'user@gmail.com' && oldPass === 'UserPass' || email === 'admin@gmail.com' && oldPass === 'AdminPass') {
    newPass = prompt('Please, enter your new password');
} else {
    alert('You wrote the wrong password');
}

if (newPass === null || newPass === '') {
    alert('Canceled');

} else if (newPass.length < minPassLength) {
    alert('It’s too short password. Sorry');

} else {
    newValidPass = prompt('Please, enter your new password again');
}

if (newValidPass !== newPass && newPass.length >= minPassLength) {
    alert('You wrote the wrong password');
} else if (newPass.length >= minPassLength) {
    alert('You have successfully changed your password.');
}