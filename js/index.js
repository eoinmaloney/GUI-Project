
var typingContainer = document.getElementById("typing-container")
var createPostButton = document.getElementById("create-post-button")

function showTypingContainer(){
    typingContainer.style.visibility = "visible"
}

createPostButton.addEventListener("click", showTypingContainer)

/*      Sources
- 
*/

/*      To do
-   Check if user has an account
-   Add an X button to top right of create post that closes the menu
-   Add a whole div when the user clicks post
*/
