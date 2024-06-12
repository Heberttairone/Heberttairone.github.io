document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    const validCredentials = [
        { username: "dudinha", password: "muruncuja" },
        { username: "duda", password: "fullstack" },
        { username: "maria", password: "fullstack" },
        { username: "duda", password: "fullstack" },
        { username: "duda", password: "fullstack" },
        { username: "duda", password: "fullstack" } // Adicione mais usuários aqui
    ];

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const isValid = validCredentials.some(cred => cred.username === username && cred.password === password);

        if (isValid) {
            window.location.href = "index.html";
        } else {
            errorMessage.textContent = "Errado, você é mesmo Duda?";
            errorMessage.style.display = "block";
        }
    });
});

