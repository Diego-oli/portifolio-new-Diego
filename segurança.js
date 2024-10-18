document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value; 

    if (username.length < 3 || password.length < 6) {
        alert('Usuário deve ter pelo menos 3 caracteres e a senha pelo menos 6.');
        return;
    }

    try {
      
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password }) 
        });

        if (!response.ok) {
            throw new Error(`Erro ao fazer login: ${response.statusText}`);
        }

        const data = await response.json(); 

    } catch (error) {
        alert(error.message); 
    }
});

document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault(); 
    const newUsername = document.getElementById('newUsername').value; 
    const newPassword = document.getElementById('newPassword').value; 

    if (newUsername.length < 3 || newPassword.length < 6) {
        alert('Usuário deve ter pelo menos 3 caracteres e a senha pelo menos 6.');
        return;
    }

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ newUsername, newPassword }) 
        });

        if (!response.ok) {
            throw new Error(`Erro ao registrar: ${response.statusText}`);
        }

        const data = await response.json(); 

    } catch (error) {
        alert(error.message); 
    }
});
