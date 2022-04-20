const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};
refs.text.style.fontSize = `${refs.input.value}px`;
 
function sizeChange(event) {
    const changeValue = event.currentTarget.value;
    
    if (changeValue >= refs.input.value && changeValue <= refs.input.value) {
        refs.text.style.fontSize = `${refs.input.value}px`;
    };       
};

refs.input.addEventListener('input', sizeChange);

