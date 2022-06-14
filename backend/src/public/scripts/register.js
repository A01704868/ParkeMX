document.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.matches('#register-btn')) {
        var nameInput = document.getElementById('name-input');
        var emailInput = document.getElementById('email-input');
        var pwdInput = document.getElementById('pwd-input');
        var data = {
            name: nameInput.value,
            email: emailInput.value,
            password: pwdInput.value,
            role: 1
        };
        Http.Post('/api/auth/signon', data)
            .then(() => {
                window.location.href = '/users';
            })
    }
}, false)