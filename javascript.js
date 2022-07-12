let password = document.querySelector("#password")
let passwordConfirm = document.querySelector("#confirm-password")
let register = document.querySelector(".register")
let form = document.querySelector("form")
let span = document.querySelector("span")

register.addEventListener("click", function() {
    if (password.value !== passwordConfirm.value) {
        password.classList.add("noMatch");
        passwordConfirm.classList.add("noMatch")
        span.classList.add("noMatchMessage")
    }
})
