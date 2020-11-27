// const backGround = document.getElementById('background')
// const navBar = document.getElementById("navigation-menu")
// const lDMode = document.getElementById('ldmode')
// const title = document.getElementById('title')
// const buttons = document.getElementsByClassName('splash-buttons')
// const cards = document.getElementsByClassName('work-item-card')
// const contactForm = document.getElementById('contact-form')
// const sendButton = document.getElementById('send-button')


let dark = false

const darkMode = () => {
    const root = document.documentElement;

    if (dark === false) {
    //background color variables
    root.style.setProperty('--light',  '#2c2c2c')
    root.style.setProperty('--mid',  '#3a3a3a')
    root.style.setProperty('--dark',  '#ffffff')

    //text color variables
    root.style.setProperty('--text-color-light',  '#454545')
    root.style.setProperty('--text-color-dark',  '#ffffff')

        //set dark to True
        dark = true
    } else {
        //background color variables
    root.style.setProperty('--light',  '#ffffff')
    root.style.setProperty('--mid',  '#f5f5f5')
    root.style.setProperty('--dark',  '#454545')

    //text color variables
    root.style.setProperty('--text-color-light',  '#ffffff')
    root.style.setProperty('--text-color-dark',  '#454545')


    //set dark to False
        dark = false
    }
    

}