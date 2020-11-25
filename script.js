const highlightButton = () => {
    const sendButton = document.getElementById('send-button') 
    const emailField = document.getElementById('email-field')
    const subjectField = document.getElementById('subject-field')
    const messageField = document.getElementById('message-field')
    let emailValue = false
    let subjectValue = false
    let msgValue = false

    emailField.addEventListener('change', (e) => {
        emailValue = true
        if (emailValue && subjectValue && msgValue) {
            sendButton.classList.remove('send-button')
            sendButton.classList.add('hl-button')
        } 
    })

    subjectField.addEventListener('change', (e) => {
        subjectValue = true
        if (emailValue && subjectValue && msgValue) {
            sendButton.classList.remove('send-button')
            sendButton.classList.add('hl-button')
        } 
    })

    messageField.addEventListener('change', (e) => {
        msgValue = true
        if (emailValue && subjectValue && msgValue) {
            sendButton.classList.remove('send-button')
            sendButton.classList.add('hl-button')
        } 
    })

}

highlightButton()
