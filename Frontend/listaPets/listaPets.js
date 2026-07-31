const listaPets = document.getElementById("listaPets");

const API = "http://localhost:8080/pets";



async function buscarPets(){


    try{


        const resposta = await fetch(API);



        if(!resposta.ok){

            throw new Error("Erro ao buscar pets");

        }



        const pets = await resposta.json();



        listaPets.innerHTML = "";



        pets.forEach(pet =>{


            listaPets.innerHTML += `


            <div class="card">


                <h2>
                🐾 ${pet.nome}
                </h2>



                <p>
                <strong>Espécie:</strong>
                ${pet.especie}
                </p>



                <p>
                <strong>Raça:</strong>
                ${pet.raca}
                </p>



                <p>
                <strong>Idade:</strong>
                ${pet.idade} anos
                </p>



                <hr>



                <h3>
                👤 Tutor
                </h3>



                <p>
                <strong>Nome:</strong>
                ${pet.tutor.nome}
                </p>


                <p>
                <strong>Telefone:</strong>
                ${pet.tutor.telefone}
                </p>



                <p>
                <strong>Email:</strong>
                ${pet.tutor.email}
                </p>




                <h3>
                🩺 Veterinário
                </h3>



                <p>
                <strong>Nome:</strong>
                ${pet.veterinario.nome}
                </p>



                <p>
                <strong>CRMV:</strong>
                ${pet.veterinario.crmv}
                </p>



            </div>


            `;


        });



    }


    catch(erro){


        console.error(erro);


        listaPets.innerHTML = `

        <p class="erro">
        Não foi possível carregar os pets.
        </p>

        `;


    }


}




function voltar(){

window.location.href="../cadastroPet/cadastroPet.html";

}




buscarPets();