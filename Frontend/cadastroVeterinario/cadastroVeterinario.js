const formulario = document.getElementById("loginForm");
const erroMsg = document.getElementById("erroMsg");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const crmv = document.getElementById("CRMV").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    erroMsg.textContent = "";

    if (!usuario || !senha || !crmv || !cpf || !telefone) {
        erroMsg.textContent = "Preencha todos os campos!";
        return;
    }

    alert("Cadastro realizado com sucesso!");

    window.location.href = "../listaPets/listaPets.html";
});