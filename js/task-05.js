const refs = {
    textInput: document.querySelector('#name-input'),
    textOutput: document.querySelector('#name-output'),
};

const inputChange = event => {
    if (refs.textInput.value === "") {
        refs.textOutput.textContent = 'Anonimous'
        return
    }  refs.textOutput.textContent = event.currentTarget.value;
};

refs.textInput.addEventListener('input', inputChange);
