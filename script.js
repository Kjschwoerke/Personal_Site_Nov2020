//Create function to switch between light and dark mode



const darkMode = () => { 
    console.log(localStorage)
    let light = localStorage.getItem('light') || null
    let dark = localStorage.getItem('dark') || null
    const root = document.documentElement;
    const lDText = document.getElementById('ld-text')
    const lDImage = document.getElementById('ld-image')

    if (dark === 'false' || dark === null) {
    //background color variables
    root.style.setProperty('--light',  '#2c2c2c')
    root.style.setProperty('--mid',  '#3a3a3a')
    root.style.setProperty('--dark',  '#ffffff')

    //text color variables
    root.style.setProperty('--text-color-light',  '#454545')
    root.style.setProperty('--text-color-dark',  '#ffffff')
    
    lDText.innerHTML = "Light Mode"  
    lDImage.src = "./images/sun-solid.svg" 
    

    //set light to true and dark to false
        localStorage.light = 'false'
        localStorage.dark = 'true'

    } else if (light === 'false') {

    //background color variables
    root.style.setProperty('--light',  '#ffffff')
    root.style.setProperty('--mid',  '#F5F5F5')
    root.style.setProperty('--dark',  '#454545')

    //text color variables
    root.style.setProperty('--text-color-light',  '#ffffff')
    root.style.setProperty('--text-color-dark',  '#454545')
    
    lDText.innerHTML = "Dark Mode"
    lDImage.src = "./images/moon-solid.svg" 
    

    //set dark to False
    localStorage.dark = 'false'
    localStorage.light = 'true'

    } else {

    //background color variables
    root.style.setProperty('--light',  '#ffffff')
    root.style.setProperty('--mid',  '#F5F5F5')
    root.style.setProperty('--dark',  '#454545')

    //text color variables
    root.style.setProperty('--text-color-light',  '#ffffff')
    root.style.setProperty('--text-color-dark',  '#454545')
    
    lDText.innerHTML = "Dark Mode"
    lDImage.src = "./images/moon-solid.svg" 
    

    //set dark to False
    localStorage.dark = 'true'
    localStorage.light = 'false'

    }
}

function checkDark() {
    const root = document.documentElement;
    
    if(localStorage.getItem('dark') === 'true') {
        console.log('true')
        //background color variables
    root.style.setProperty('--light',  '#2c2c2c')
    root.style.setProperty('--mid',  '#3a3a3a')
    root.style.setProperty('--dark',  '#ffffff')

    //text color variables
    root.style.setProperty('--text-color-light',  '#454545')
    root.style.setProperty('--text-color-dark',  '#ffffff')
    }
}

window.onload(checkDark())


//show sandwich menu links as overlay
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  } 


