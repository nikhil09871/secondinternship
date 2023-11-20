function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation, you can enhance this based on your requirements
    if (name === '' || email === '' || username === '' || password === '') {
        alert('All fields must be filled out');
        return;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format. Please enter the email in a valid format, e.g., randomname@gmail.com');
        return;
    }

    // Validate password strength
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Invalid password format. Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return;
    }

    // If all validations pass, hide the form and show the confirmation message
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
}
