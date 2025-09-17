const secao = document.getElementById('secao');
const livro = document.getElementById('livro');
const antigoTestamento = document.getElementById('antigoTestamento');
const novoTestamento = document.getElementById('novoTestamento');

const capitulo = document.getElementById('capitulo');
const verso = document.getElementById('verso');
const buscarVersiculoBtn = document.getElementById('buscarVersiculo');
const resultDiv = document.getElementById('result');

secao.addEventListener('change', () => {
    if (secao.value === antigoTestamento.value) {
        livro.innerHTML = `
            <option value="selecao1" selected>Selecione o livro</option>
            <option value="Gênesis">Gênesis</option>
            <option value="Êxodo">Êxodo</option>
            <option value="Levítico">Levítico</option>
            <option value="Números">Números</option>
            <option value="Deuteronômio">Deuteronômio</option>
            <option value="Josué">Josué</option>
            <option value="Juízes">Juízes</option>
            <option value="Rute">Rute</option>
            <option value="1 Samuel">1 Samuel</option>
            <option value="2 Samuel">2 Samuel</option>
            <option value="1 Reis">1 Reis</option>
            <option value="2 Reis">2 Reis</option>
            <option value="1 Crônicas">1 Crônicas</option>
            <option value="2 Crônicas">2 Crônicas</option>
            <option value="Esdras">Esdras</option>
            <option value="Neemias">Neemias</option>
            <option value="Ester">Ester</option>
            <option value="Jó">Jó</option>
            <option value="Salmos">Salmos</option>
            <option value="Provérbios">Provérbios</option>
            <option value="Eclesiastes">Eclesiastes</option>
            <option value="Cânticos">Cânticos</option>
            <option value="Isaías">Isaías</option>
            <option value="Jeremias">Jeremias</option>
            <option value="Lamentações">Lamentações</option>
            <option value="Ezequiel">Ezequiel</option>
            <option value="Daniel">Daniel</option>
            <option value="Oseias">Oseias</option>
            <option value="Joel">Joel</option>
            <option value="Amós">Amós</option>
            <option value="Obadias">Obadias</option>
            <option value="Jonas">Jonas</option>
            <option value="Miquéias">Miquéias</option>
            <option value="Naum">Naum</option>
            <option value="Habacuque">Habacuque</option>
            <option value="Sofonias">Sofonias</option>
            <option value="Ageu">Ageu</option>
            <option value="Zacarias">Zacarias</option>
            <option value="Malaquias">Malaquias</option>
        `;
    } else if (secao.value === novoTestamento.value) {
            livro.innerHTML = `
                <option value="selecao2" selected>Selecione o livro</option>
                <option value="Mateus">Mateus</option>
                <option value="Marcos">Marcos</option>
                <option value="Lucas">Lucas</option>
                <option value="João">João</option>
                <option value="Atos">Atos</option>
                <option value="Romanos">Romanos</option>
                <option value="1 Coríntios">1 Coríntios</option>
                <option value="2 Coríntios">2 Coríntios</option>
                <option value="Gálatas">Gálatas</option>
                <option value="Efésios">Efésios</option>
                <option value="Filipenses">Filipenses</option>
                <option value="Colossenses">Colossenses</option>
                <option value="1 Tessalonicenses">1 Tessalonicenses</option>
                <option value="2 Tessalonicenses">2 Tessalonicenses</option>
                <option value="1 Timóteo">1 Timóteo</option>
                <option value="2 Timóteo">2 Timóteo</option>
                <option value="Tito">Tito</option>
                <option value="Filemom">Filemom</option>
                <option value="Hebreus">Hebreus</option>
                <option value="Tiago">Tiago</option>
                <option value="1 Pedro">1 Pedro</option>
                <option value="2 Pedro">2 Pedro</option>
                <option value="1 João">1 João</option>
                <option value="2 João">2 João</option>
                <option value="3 João">3 João</option>
                <option value="Judas">Judas</option>
                <option value="Apocalipse">Apocalipse</option>
            `;
    }
});


const apiUrl = 'https://bible-api.com/data/almeida';

buscarVersiculoBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const livroValue = livro.value.trim();
});