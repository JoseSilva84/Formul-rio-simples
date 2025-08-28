const nomes = [];

// const buttonAdicionar = document.querySelector("#sorteioAdicionar");

const adicionar = (onclick) => {
    buttonAdicionar.addEventListener("click", adicionar);
    const nome = document.querySelector("#nome").value;
    nomes.push(nome);
    console.log(nomes);
}

