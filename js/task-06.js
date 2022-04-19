   
const textInput = document.querySelector('#validation-input');   
const dataLength = parseInt(textInput.getAttribute('data-length'));
console.log(dataLength);

function onInputBlur(event) {
    textInput.classList.remove('valid', 'invalid');
    event.currentTarget.value.length === dataLength ?
        textInput.classList.add('valid') :
        textInput.classList.add('invalid');
};

textInput.addEventListener('blur', onInputBlur);

