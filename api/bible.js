const secao = document.getElementById('secao');
const livro = document.getElementById('livro');
const antigoTestamento = document.getElementById('antigoTestamento');
const novoTestamento = document.getElementById('novoTestamento');

const capitulo = document.getElementById('capitulo');
const verso = document.getElementById('verso');
const buscarVersiculoBtn = document.getElementById('buscarVersiculo');
const resultDiv = document.getElementById('result');

livro.innerHTML = `
    <option value="selecao" selected>Selecione o livro</option>
            <option value="GEN">Gênesis</option>
            <option value="EXO">Êxodo</option>
            <option value="LEV">Levítico</option>
            <option value="NUM">Números</option>
            <option value="DEU">Deuteronômio</option>
            <option value="JOS">Josué</option>
            <option value="JDG">Juízes</option>
            <option value="RUT">Rute</option>
            <option value="1SA">1 Samuel</option>
            <option value="2SA">2 Samuel</option>
            <option value="1KI">1 Reis</option>
            <option value="2KI">2 Reis</option>
            <option value="1CH">1 Crônicas</option>
            <option value="2CH">2 Crônicas</option>
            <option value="EZR">Esdras</option>
            <option value="NEH">Neemias</option>
            <option value="EST">Ester</option>
            <option value="JOB">Jó</option>
            <option value="PSA">Salmos</option>
            <option value="PRO">Provérbios</option>
            <option value="ECC">Eclesiastes</option>
            <option value="SNG">Cânticos</option>
            <option value="ISA">Isaías</option>
            <option value="JER">Jeremias</option>
            <option value="LAM">Lamentações</option>
            <option value="EZK">Ezequiel</option>
            <option value="DAN">Daniel</option>
            <option value="HOS">Oseias</option>
            <option value="JOL">Joel</option>
            <option value="AMO">Amós</option>
            <option value="OBA">Obadias</option>
            <option value="JON">Jonas</option>
            <option value="MIC">Miquéias</option>
            <option value="NAM">Naum</option>
            <option value="HAB">Habacuque</option>
            <option value="ZEP">Sofonias</option>
            <option value="HAG">Ageu</option>
            <option value="ZAC">Zacarias</option>
            <option value="MAL">Malaquias</option>
`;

secao.addEventListener('change', () => {
    if (secao.value === antigoTestamento.value) {
        livro.innerHTML = `
            <option value="selecao1" selected>Selecione o livro</option>
            <option value="GEN">Gênesis</option>
            <option value="EXO">Êxodo</option>
            <option value="LEV">Levítico</option>
            <option value="NUM">Números</option>
            <option value="DEU">Deuteronômio</option>
            <option value="JOS">Josué</option>
            <option value="JDG">Juízes</option>
            <option value="RUT">Rute</option>
            <option value="1SA">1 Samuel</option>
            <option value="2SA">2 Samuel</option>
            <option value="1KI">1 Reis</option>
            <option value="2KI">2 Reis</option>
            <option value="1CH">1 Crônicas</option>
            <option value="2CH">2 Crônicas</option>
            <option value="EZR">Esdras</option>
            <option value="NEH">Neemias</option>
            <option value="EST">Ester</option>
            <option value="JOB">Jó</option>
            <option value="PSA">Salmos</option>
            <option value="PRO">Provérbios</option>
            <option value="ECC">Eclesiastes</option>
            <option value="SNG">Cânticos</option>
            <option value="ISA">Isaías</option>
            <option value="JER">Jeremias</option>
            <option value="LAM">Lamentações</option>
            <option value="EZK">Ezequiel</option>
            <option value="DAN">Daniel</option>
            <option value="HOS">Oseias</option>
            <option value="JOL">Joel</option>
            <option value="AMO">Amós</option>
            <option value="OBA">Obadias</option>
            <option value="JON">Jonas</option>
            <option value="MIC">Miquéias</option>
            <option value="NAM">Naum</option>
            <option value="HAB">Habacuque</option>
            <option value="ZEP">Sofonias</option>
            <option value="HAG">Ageu</option>
            <option value="ZAC">Zacarias</option>
            <option value="MAL">Malaquias</option>
        `;
    } else if (secao.value === novoTestamento.value) {
            livro.innerHTML = `
                <option value="selecao2" selected>Selecione o livro</option>
                <option value="MAt">Mateus</option>
                <option value="MRK">Marcos</option>
                <option value="LUK">Lucas</option>
                <option value="JHN">João</option>
                <option value="ACT">Atos</option>
                <option value="ROM">Romanos</option>
                <option value="1CO">1 Coríntios</option>
                <option value="2CO">2 Coríntios</option>
                <option value="GAL">Gálatas</option>
                <option value="EPH">Efésios</option>
                <option value="PHP">Filipenses</option>
                <option value="COL">Colossenses</option>
                <option value="1TH">1 Tessalonicenses</option>
                <option value="2TI">2 Tessalonicenses</option>
                <option value="1TI">1 Timóteo</option>
                <option value="2TI">2 Timóteo</option>
                <option value="TIT">Tito</option>
                <option value="PHM">Filemom</option>
                <option value="HEB">Hebreus</option>
                <option value="JAS">Tiago</option>
                <option value="1PE">1 Pedro</option>
                <option value="2PE">2 Pedro</option>
                <option value="1JN">1 João</option>
                <option value="1JN">2 João</option>
                <option value="3JN">3 João</option>
                <option value="JUD">Judas</option>
                <option value="REV">Apocalipse</option>
            `;
    }
});

buscarVersiculoBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const input = livro.value;

    // const apiUrl = await fetch(`https://bible-api.com/data/almeida/${input}/${capitulo.value}`);
    const apiUrl = await fetch(`https://bible-api.com/${input}+${capitulo.value}:${verso.value}?translation=almeida`);

    const {book_id, chapter, verse, text} = await apiUrl.json();
    const data = {book_id, chapter, verse, text};

    console.log(data.book_id);
    // console.log(data.text);
    resultDiv.innerText = data.text;
});