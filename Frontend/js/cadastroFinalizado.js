const formPet = document.getElementById("formPet");


formPet.addEventListener("submit", function(e){


    e.preventDefault();



    const nome = document.getElementById("nomePet").value.trim();
    const especie = document.getElementById("especie").value;
    const sexo = document.getElementById("sexo").value;
    const peso = document.getElementById("peso").value;
    const vacinado = document.getElementById("vacinado").value;



    if(
        nome === "" ||
        especie === "" ||
        sexo === "" ||
        peso === "" ||
        vacinado === ""
    ){

        alert("Preencha todos os campos obrigatórios.");

        return;

    }



    alert("Pet cadastrado com sucesso!");



    window.location.href="index.html";



});