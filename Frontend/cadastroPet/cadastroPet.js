const formulario = document.getElementById("loginForm");
const erroMsg = document.getElementById("erroMsg");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const animal = document.getElementById("animal").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const especie = document.getElementById("especie").value.trim();
    const observacoes = document.getElementById("observacoes").value.trim(); 
    erroMsg.textContent = "";

    if (!animal || !idade || !especie || !observacoes) {
        erroMsg.textContent = "Preencha todos os campos!";
        return;
    }

    alert("Cadastro realizado com sucesso!");

    window.location.href = "../listaPets/listaPets.html";
});