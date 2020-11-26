const backGround = document.getElementById('background')
const navBar = document.getElementById("navigation-menu")
const lDMode = document.getElementById('ldmode')
const title = document.getElementById('title')
const buttons = document.getElementsByClassName('splash-buttons')
const cards = document.getElementsByClassName('work-item-card')
const contactForm = document.getElementById('contact-form')
const sendButton = document.getElementById('send-button')

let dark = false

const darkMode = () => {
    
    if (dark === false) {
        backGround.classList.add('dark')
        navBar.classList.add('dark')
        title.classList.add('dark')
        lDMode.classList.add('dark')
        lDMode.innerHTML = 'Light Mode <img src="./images/sun-solid.svg" alt="Moon Icon to switch to Dark Mode">'
        contactForm.classList.add('dark')
        sendButton.classList.add('dark')

        for(let i = 0; i<buttons.length; i++) {
            buttons[i].classList.add('dark')
            cards[i].classList.add('dark')
        }
        
        //set dark to True
        dark = true
    } else {
        backGround.classList.remove('dark')
        navBar.classList.remove('dark')
        title.classList.remove('dark')
        lDMode.classList.remove('dark')
        lDMode.innerHTML = 'Dark Mode <img src="./images/moon-solid.svg" alt="Moon Icon to switch to Dark Mode">'
        contactForm.classList.remove('dark')
        sendButton.classList.remove('dark')

        for(let i = 0; i<buttons.length; i++) {
            buttons[i].classList.remove('dark')
            cards[i].classList.remove('dark')
        }

        dark = false
    }
    

}