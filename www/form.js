// Retrieving the values of form elements 
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#contactForm")
    const surName = document.querySelector("#surname")
    const firstName = document.querySelector("#firstname")
    const phone = document.querySelector("#phone")
    const email = document.querySelector("#email")
    const message = document.querySelector("#msg")
    const modal = document.querySelector("#modal")
    const closeButton = document.querySelector("#closeButton")
    const main = document.querySelector("main")
    
     form.onsubmit = (e) => { 
        e.preventDefault()
        
        if (validateName(surName) && validateName(firstName) && validatePhone() && validateEmail() && validateMsg()) {
          // if all good, show the popup
          form.style.opacity = '0.5' // set form 50% transparent
           modal.style.display = "block"
           form.reset();    //reset the form
        }
        else {
            console.log("Error while validating the form.")
        }
    }    

    // Hide the popup modal on click of close button
    closeButton.onclick = (e) => {
        form.style.opacity = '1' // set form 50% transparent
        modal.style.display = "none"
    }

    function validateName(name) {
        
        let nameRegExp = /^\p{L}+[\p{L} ,.'-]{0,}$/u
  
        if(!(nameRegExp.test(name.value))) {
             if(name === surName) {
                printError("surNameErr", "Please enter a valid sur name");
                return false;
             } else if(name === firstName) {
                printError("firstNameErr", "Please enter a valid first name");
                return false;
             }
        } else {
             printError("surNameErr", "");
             return true;
        }
    }
  
    function validatePhone() {
        const phoneRegExp = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
        // if phone number is entered, validate it
        if(!(phone.value.length > 0 && (phoneRegExp.test(phone.value)) )) {
            printError("phoneErr", "Please enter a valid phone number");
            return false;
        } else {
            printError("phoneErr", "");
            return true;
        }       
    }

    function validateEmail () {
        const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(!(emailRegExp.test(email.value))) {
            printError("emailErr", "Please enter a valid email address");
            return false;
        } else {
            printError("emailErr", "");
            return true;
        }       
    }

    function validateMsg() {
        if(!(message.value.length > 0 )) {
            printError("msgErr", "Please enter the message");
            return false;
        } else {
            printError("msgErr", "");
            return true;
        }    
    }

    // Defining a function to display error message
    function printError(elemId, hintMsg) {
         document.getElementById(elemId).innerHTML = hintMsg;
    }      
})
