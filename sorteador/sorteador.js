const nomes = [];

const buttonAdicionar = document.querySelector("#sorteioAdicionar");

const adicionar = (event) => {
    event.preventDefault();
    const nome = document.querySelector("#nome").value;
    nomes.push(nome);
    console.log(nomes);
    let listaNomes = document.createElement("ul");
    for (let i = 0; i < nomes.length; i++) {
        let item = document.createElement("li");
        item.textContent = nomes[i];
        listaNomes.appendChild(item);
    }

    document.body.appendChild(listaNomes);
};

buttonAdicionar.addEventListener("click", adicionar);
