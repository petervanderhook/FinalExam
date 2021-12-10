
console.log('I run')
modetoggle = document.querySelector("input.toggle")

modetoggle.addEventListener("click", change_mode)

function change_mode(evt) {
    console.log('im running')
    document.classList.toggle("dark-theme")
}


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