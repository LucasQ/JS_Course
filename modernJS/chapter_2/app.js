const form = document.querySelector('form');
const btn = document.querySelector('input[type=submit]');
// const inputName = document.querySelector('input[placeholder=username]');
const p = document.querySelector('p');

//letras maiusculas ou minusculas de 6 a 12 chars
const usernamePattern = /^[a-zA-Z]{6,12}$/;

// validação no submit do form
form.addEventListener('submit', e => {
    e.preventDefault(); // por padrao submit da refresh na pag

    const username = form.username.value;

    if (usernamePattern.test(username)) {
        p.textContent = 'is valid';
    } else {
        p.textContent = 'is not valid';
    }
});

// validando ao clicar no mouse
form.username.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)) {
        console.log('passed');
    } else {
        console.log('failed');
    }    
});

