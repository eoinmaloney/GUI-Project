# GUI-Project
Made by Eoin Maloney &amp; Finn Lucey for our GUI Sem 2 Project

Pages
Home Page
Profile Page
Sign-up Page

                            Test Cases
EOIN'S TEST CASES
> Intention    
User presses post and their content is posted

> Result                                
Text box was showing "undefined"

> Fix                                        
textboxContent variable was using .value instead of .innerText
---------------------------
> Intention
User deletes account

> Result
Account was not deleted

> Fix
Delete function was using <variable name>.setItem(null) instead of <variable name>.removeItem
---------------------------
> Intention
System checks if user has an account

> Result
Error returns as it was checking if the local registers variables were null when no items existed

> Fix
Check the localstorage length is 0 as that value means no items are in localstorage
---------------------------
> Intention
Add users details to their posts

> Result
No details were displayed



FINN'S TEST CASES