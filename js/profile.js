var email = localStorage.getItem("signup_email")
var username = localStorage.getItem("signup_username")
var password = localStorage.getItem("signup_password")

var email_label = document.getElementById("email-label")
var username_label = document.getElementById("username-label")
var password_label = document.getElementById("password-label")

if(email === null || username === null || password === null){
    window.location.href = "../root/sign-up.html"
}
else {
    email_label.innerHTML = "Email: " + email
    username_label.innerHTML = "Username: " + username
    password_label.innerHTML = "Password: " + password
}

/*      To do
- Check if user has an account
- Add an image input system to change profile picture
*/

/*      Completed
- Redirect user if they don't have an account
- Display user details on page
*/