
var typingContainer = document.getElementById("typing-container")
var createPostButton = document.getElementById("create-post-button")
var closePostButton = document.getElementById("close-button")

function showTypingContainer(){
    typingContainer.style.visibility = "visible"
}

function hideTypingContainer(){
    typingContainer.style.visibility = "hidden"
}

createPostButton.addEventListener("click", showTypingContainer)
closePostButton.addEventListener("click", hideTypingContainer)
/*      Sources
- 
*/

/*      To do
-   Check if user has an account
-   Add a whole div when the user clicks post
*/

/*      Completed
-   Add an X button to top right of create post that closes the menu 
*/
