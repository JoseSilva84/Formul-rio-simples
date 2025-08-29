const nomes = [];

const buttonAdicionar = document.querySelector("#sorteioAdicionar");

const adicionar = (event) => {
    event.preventDefault();
    const nome = document.querySelector("#nome").value;
    nomes.push(nome);
    console.log(nomes);
    let listaNomes = document.createElement("ul");
    listaNomes.textContent = nomes[nomes.length - 1];
    document.body.appendChild(listaNomes);
    listaNomes.style.textAlign = "center";
};

buttonAdicionar.addEventListener("click", adicionar);
