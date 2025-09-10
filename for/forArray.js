const participante = document.getElementById('nome');
const nomes = [];
const participante1 = document.getElementById('participante1');
const participante2 = document.getElementById('participante2');
const participante3 = document.getElementById('participante3');

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    nomes.push(participante.value);
    participante1.innerText = nomes[0] || '';
    participante2.innerText = nomes[1] || '';
    participante3.innerText = nomes[2] || '';
    if (participante3.innerText !== '') {
        const successMessage = document.createElement('h2');
        successMessage.innerText = 'Dados preenchidos com sucesso!';
        document.body.appendChild(successMessage);
    };
    console.log(nomes);
});

