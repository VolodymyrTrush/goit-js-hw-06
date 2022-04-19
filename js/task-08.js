const sendForm = document.querySelector('.login-form');

sendForm.addEventListener('submit', sendSubmitForm);

function sendSubmitForm(event) {
    event.preventDefault();

    const infoEl = event.currentTarget.elements;
    const email = infoEl.email.value;
    const password = infoEl.password.value;
  const info = { email, password };
  
    if (email === "" || password === "") {
        return alert("Все поля должны быть заполнены!");
    }

  console.log(`Email: ${email}, Password: ${password}`);
  event.currentTarget.reset();
};

