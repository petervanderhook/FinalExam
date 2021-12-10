
console.log('I run')
modetoggle = document.querySelector("input.toggle")

modetoggle.addEventListener("click", change_mode)

function change_mode(evt) {
    console.log('im running')
    document.classList.toggle("dark-theme")
}
