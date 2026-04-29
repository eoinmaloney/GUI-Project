function saveSignup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
        document.getElementById("message").innerText = "Please fill in the required fields.";
        return;
    }

    localStorage.setItem("signup_email", email);
    localStorage.setItem("signup_password", password);

    document.getElementById("message").innerText = "Details saved!";
}