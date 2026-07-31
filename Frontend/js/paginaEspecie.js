const listaEspecies = document.getElementById("lista-especies");

const especies = [...new Set(especies.map(p => p.especies))];

especies.forEach(cat => {
const li = document.createElement("li");
li.textContent = cat;
li.onclick = () => filtrar(cat);
listaEspecies.appendChild(li);
});

function filtrar(cat) {
listaFiltrada.innerHTML = "";

const filtrados = produtos.filter(p => p.especies === cat);

filtrados.forEach(prod => {
const div = document.createElement("div");
div.classList.add("especies-cat");

div.innerHTML = `
<h3>${especies.nome}</h3>
`;

listaFiltrada.appendChild(div);
});
}
