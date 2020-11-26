const backGround = document.getElementById('background')
const navBar = document.getElementById("navigation-menu")
const lDMode = document.getElementById('ldmode')

let dark = false

const darkMode = () => {
    
    if (dark === false) {
        backGround.classList.add('dark')
        navBar.classList.add('dark')
        lDMode.classList.add('dark')
        lDMode.innerHTML = 'Light Mode <img src="./images/sun-solid.svg" alt="Moon Icon to switch to Dark Mode">'
        //set dark to True
        dark = true
    } else {
        backGround.classList.remove('dark')
        navBar.classList.remove('dark')
        lDMode.classList.remove('dark')
        lDMode.innerHTML = 'Dark Mode <img src="./images/moon-solid.svg" alt="Moon Icon to switch to Dark Mode">'

        dark = false
    }
    

}