// VARIABLES

//Containers
var typingContainer = document.getElementById("typing-container")
var createPostContainer = document.getElementById("create-post-container")
var postingContainer = document.getElementById("posting-container")
//Buttons
var createPostButton = document.getElementById("create-post-button")
var closePostButton = document.getElementById("close-button")
var postButton = document.getElementById("post-button")
//Local Storage
var storedEmail = localStorage.getItem("signup_email")
var storedUsername = localStorage.getItem("signup_username")



// FUNCTIONS
// Check if user has an account through local storage length
if(localStorage.length === 0){ //Checks that the local storage has no items
    hidePostingContainer()
    alert("Create an account on Sign-up page to post!")
}

// Show and Hide by changing style
function showTypingContainer(){
    typingContainer.style.visibility = "visible"
}
function hideTypingContainer(){
    typingContainer.style.visibility = "hidden"
}
function hidePostingContainer(){
    createPostContainer.style.visibility = "hidden"
}

// Posting Content
function postContent (){
    var textboxContent = document.getElementById("text-box").innerText
    const post = document.createElement("div") // Creates a new div element in the page, will be used for making new posts
    post.id = "post"
    postingContainer.appendChild(post) // Slots this HTML into the postingContainer div 
    post.innerHTML = `
        <div id="post-container">
            <div id="profile-section">
            
            </div>

            <div id="username-section">
                <p> ${storedUsername} </p>     
            </div>
                    
            <div id="writing-space">
                <p> ${textboxContent} </p>
            </div>
                        
        </div>
    
    ` // I used string literals here that I found on the W3Schools website which act very similarlly to printf string literals in java
    alert("Content Posted")
}

// EVENT LISTENERS
postButton.addEventListener("click", postContent)
createPostButton.addEventListener("click", showTypingContainer)
closePostButton.addEventListener("click", hideTypingContainer)

/*      Sources
- https://www.w3schools.com/jsref/prop_storage_length.asp
- https://www.w3schools.com/jsref/met_document_createelement.asp
- https://www.w3schools.com/jsref/met_node_appendchild.asp
- https://www.w3schools.com/js/js_string_templates.asp
*/

/*      To do

*/

/*      Completed
-   Add an X button to top right of create post that closes the menu 
-   Check if user has an account
-   Add a whole div when the user clicks post
*/
