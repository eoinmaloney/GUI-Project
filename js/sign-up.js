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