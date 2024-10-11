document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login__Form").addEventListener("submit", function(event){
        var email = document.getElementById('email').value;
        var password = document.getElementById("password").value;

        if (email.trim() === "" || password.trim() === ""){
            alert("Por favor, preencha todos os campos.");
            event.preventDefault(); // Impede o envio do formulário
            return;
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)){
            alert("Por favor, insira um e-mail válido");
            event.preventDefault();
            return;    
        }

        alert('Formulário enviado com sucesso!')
    });
});
