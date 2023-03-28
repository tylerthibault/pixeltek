const htmlEl = document.querySelector("html")

const toggleLabel = document.querySelector('.toggle-label')
const toggleBtn = document.querySelector('.toggle-btn')

let mode = window.localStorage.getItem("mode")

toggleBtn.addEventListener("click", function(){
    mode = window.localStorage.getItem("mode")
    if (mode === 'light') {
        console.log("set mode to dark")
        toggleDark()
    } else if (mode === 'dark') {
        console.log("set mode to light")
        toggleLight()
    }
})

function checkOnLoadDarkToggle() {
    if (mode === 'dark') {
        toggleDark()
    } else {
        toggleLight()
    }
}

function toggleDark() {
    toggleBtn.classList.remove("translate-x-8")
    toggleBtn.children[0].classList.add("fa-moon", "text-black")
    toggleBtn.children[0].classList.remove("fa-sun", "text-myaccent")
    
    toggleBtn.classList.remove("bg-mydark2")
    htmlEl.classList.add("dark")
    
    saveMode("dark")
}

function toggleLight() {
    toggleBtn.classList.add("translate-x-8")
    toggleBtn.children[0].classList.add("fa-sun", "text-myaccent")
    toggleBtn.children[0].classList.remove("fa-moon", "text-black")
    
    toggleBtn.classList.add("bg-mydark2")

    htmlEl.classList.remove("dark")

    saveMode("light")
}

function saveMode(newMode) {
    window.localStorage.setItem("mode", newMode)
}


checkOnLoadDarkToggle()