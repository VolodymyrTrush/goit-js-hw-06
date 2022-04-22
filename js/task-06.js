   
const textInput = document.querySelector('#validation-input');   
const dataLength = parseInt(textInput.getAttribute('data-length'));


function onInputBlur(event) {
    textInput.classList.remove('valid', 'invalid');
    
    if (event.currentTarget.value.length === dataLength) {
        textInput.classList.add('valid')
        return
     }
        textInput.classList.add('invalid');
};

textInput.addEventListener('blur', onInputBlur);

