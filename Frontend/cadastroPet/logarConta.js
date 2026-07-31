const formulario = document.getElementById("loginForm");
const erroMsg = document.getElementById("erroMsg");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const pet = document.getElementById("pet").value.trim();
    const especie = document.getElementById("especie").value.trim();

    erroMsg.textContent = "";

    if (!pet || !especie) {
        erroMsg.textContent = "Preencha todos os campos!";
        return;
    }

    alert("Login realizado com sucesso!");

    window.location.href = "../listaPets/listaPets.html";
});