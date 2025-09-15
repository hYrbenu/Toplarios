const emailInput = document.getElementById('emailInput');
const senhaInput = document.getElementById('SenhaInput');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function(e) {
    e.preventDefault();

    const email = emailInput.value;
    const senha = senhaInput.value;

    if (email == ''  || senha == '') {
        const errorEl = document.getElementById('login-error');
        if (errorEl) {
            errorEl.textContent = 'Preencha o e-mail e a senha.';
            errorEl.style.display = 'block';
        }
        return;
    } else {
        const errorEl = document.getElementById('login-error');
        if (errorEl) {
            errorEl.textContent = '';
            errorEl.style.display = 'none';
        }
    }
});
