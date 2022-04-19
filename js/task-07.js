const refs = {
    input: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
};

const textSize = {
    sizeMin: refs.input.getAttribute('min'),
    sizeMax: refs.input.getAttribute('max'),  
};

function sizeChange(event) {
    const changeValue = event.currentTarget.value;
    if (changeValue >= textSize.sizeMin && changeValue <= textSize.sizeMax) {
        refs.textEl.style.fontSize = `${changeValue}px`
        console.log(`${changeValue}px`);
    };       
};

refs.input.addEventListener('input', sizeChange);

