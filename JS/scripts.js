
console.log('I run')
modetoggle = document.querySelector("input.toggle")

modetoggle.addEventListener("click", function(evt) {
    console.log('im running')
    if(document.body.className == 'light-theme') {
        document.body.classList.replace('light-theme','dark-theme')
    }
    else {
        document.body.classList.replace('dark-theme','light-theme')

    }
    
})


function toDarkMode() {
    document.querySelector('.toggle:before')
}

function toLightMode() {
    x = 0
}


/* Form Section (Outputs to console)*/
let submit = document.querySelector('#frm-btn')

submit.addEventListener('click', function(evt) {
    console.log('Im clicked')
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