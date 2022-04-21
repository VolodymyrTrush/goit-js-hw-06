const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};
refs.text.style.fontSize = `${refs.input.value}px`;
 
function sizeChange(event) {
    event.currentTarget.value = refs.input.value;  
};

refs.input.addEventListener('input', sizeChange);

