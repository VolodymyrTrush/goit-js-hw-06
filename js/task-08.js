const sendForm = document.querySelector('.login-form');

sendForm.addEventListener('submit', sendSubmitForm);

function sendSubmitForm(event) {
    event.preventDefault();

    const infoEl = event.currentTarget.elements;
    const email = infoEl.email.value;
    const password = infoEl.password.value;
    
    if (email === "" || password === "") {
        return alert("Все поля должны быть заполнены!");
    }
  
     console.log({email, password});
  
     event.currentTarget.reset();
};

