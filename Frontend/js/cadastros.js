const form = document.getElementById("formTutor");
const btnAnimal = document.getElementById("btnAnimal");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cpf = document.getElementById("cpf").value.trim();

    if(nome==="" || senha==="" || email==="" || telefone==="" || cpf==="" ){
        alert("Preencha todos os campos.");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("E-mail inválido.");
        return;
    }

    if (senha.length !== 8) {
    alert("Senha inválida, insira exatamente 8 caracteres!");
    return;
}
 
    if (telefone.length !== 11) {
    alert('Telefone inválido, insira exatamente 11 números!');
    return;
} 

    if (cpf.length !== 11) {
    alert('CPF inválido, insira exatamente 11 números!');
    return;
}


    alert("Tutor cadastrado com sucesso!");

    btnAnimal.disabled = false;
    btnAnimal.classList.add("ativo");

});

btnAnimal.addEventListener("click",function(){

    if(!btnAnimal.disabled){
        window.location.href = "/pages/cadastroPet.html";
    }
});