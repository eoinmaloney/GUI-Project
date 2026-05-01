var email = localStorage.getItem("signup_email")
var username = localStorage.getItem("signup_username")
var password = localStorage.getItem("signup_password")

var email_label = document.getElementById("email-label")
var username_label = document.getElementById("username-label")
var password_label = document.getElementById("password-label")

var delete_account_button = document.getElementById("delete-account-button")

if(email === null || username === null || password === null){
    window.location.href = "../root/sign-up.html"
}
else {
    email_label.innerHTML = "Email: " + email
    username_label.innerHTML = "Username: " + username
    password_label.innerHTML = "Password: " + password
    delete_account_button.addEventListener("click", deleteAccount)
}

function deleteAccount(){
    localStorage.removeItem("signup_email");
    localStorage.removeItem("signup_username");
    localStorage.removeItem("signup_password")
    alert("Account deleted...")
}

/*      To do
- Add an image input system to change profile picture (DNF)
*/

/*      Completed
- Delete account function
- Check if user has an account
- Redirect user if they don't have an account
- Display user details on page
*/