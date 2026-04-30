function saveSignup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;

    if (email === "" || password === "" || username === "") {
        document.getElementById("message").innerText = "Please fill in the required fields.";
        return;
    }
    else{
        localStorage.setItem("signup_email", email);
        localStorage.setItem("signup_password", password);
        localStorage.setItem("signup_username", username);
    }
    
}

function login() {
    var emailInput = document.getElementById("login-email").value;
    var passwordInput = document.getElementById("login-password").value;

    var storedEmail = localStorage.getItem("signup_email");
    var storedPassword = localStorage.getItem("signup_password");

    if (storedEmail === null) {
        document.getElementById("login-message").innerText = "No account found. Please sign up first.";
        return;
    }

    if (emailInput === storedEmail && passwordInput === storedPassword) {
        window.location.href = "profile.html"; // Redirect on success
    } else {
        document.getElementById("login-message").innerText = "Incorrect email or password.";
    }
}