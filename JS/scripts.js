

modetoggle = document.querySelector("input.toggle")

/* Theme switcher. Oh my god the other functions took me 30 seconds and this took me 1.5 hours */
modetoggle.addEventListener("click", function(evt) {
    /* Checks the current theme by comparing the class name on the body element. Simply replaces the class present on the body to change the theme. */
    if(document.body.className == 'light-theme') {
        document.body.classList.replace('light-theme','dark-theme')
    }
    else {
        document.body.classList.replace('dark-theme','light-theme')
    }
})

/* Form Section (Outputs to console)*/
let submit = document.querySelector('#frm-btn')
/* Selects the form and selects each input as a seperate element. Appends the value of the element to a new object and logs the object to the console. */
submit.addEventListener('click', function(evt) {
    let message = document.querySelector('#msg')
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')

    let messageObj = {
        msgName: name.value,
        msgEmail: email.value,
        msgMessage: message.value
    }
    console.log(messageObj)
})