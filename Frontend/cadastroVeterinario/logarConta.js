const formulario = document.getElementById("loginForm");
const erroMsg = document.getElementById("erroMsg");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    

    erroMsg.textContent = "";

    if (!usuario || !senha) {
        erroMsg.textContent = "Preencha todos os campos!";
        return;
    }

    alert("Login realizado com sucesso!");

    window.location.href = "../listaPets/listaPets.html";
});