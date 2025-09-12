const participante = document.getElementById('nome');
const button = document.getElementsByTagName('button')[0];
const nomes = [];
const cores = ['blue', 'red', 'green'];
const styleAdicional = [{ textAlign: 'center', padding: '10px' }];
const participante1 = document.getElementById('participante1');
const participante2 = document.getElementById('participante2');
const participante3 = document.getElementById('participante3');

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    nomes.push(participante.value);
    participante1.innerText = nomes[0] || '';
    participante1.style.color = cores[0];
    participante1.style.textAlign = 'center';
    participante2.innerText = nomes[1] || '';
    participante2.style.color = cores[1];
    participante2.style.textAlign = 'center';
    participante3.innerText = nomes[2] || '';
    participante3.style.color = cores[2];
    participante3.style.textAlign = 'center';
    if (participante3.innerText !== '') {
        const successMessage = document.createElement('h2');
        successMessage.innerText = 'Dados preenchidos com sucesso!';
        successMessage.style.textAlign = 'center';
        successMessage.style.color = 'gray';
        document.body.appendChild(successMessage);
        participante.disabled = true;
        button.disabled = true;
    };
});

