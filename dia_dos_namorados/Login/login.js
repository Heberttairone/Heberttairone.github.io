document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Verificação simples do usuário e senha
        if (username === "dudinha" && password === "fullstack") {
            window.location.href = "index.html";
        } else {
            errorMessage.textContent = "Errado, tem certeza que é Dudinha?";
            errorMessage.style.display = "block";
        }
    });
});
