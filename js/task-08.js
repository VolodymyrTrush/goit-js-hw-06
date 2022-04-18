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

  console.log(info);
  event.currentTarget.reset();
};

// ---------------------------------------------------------

// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

