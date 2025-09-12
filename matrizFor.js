const candidatos = [
    ["João", 9],
    ["Maria", 6],
    ["Pedro", 8],
    ["Ana", 7],
    ["Lucas", 5],
];

for (let i=0; i < candidatos.length; i++) {
    const candidato = candidatos[i];
    const nota = candidatos[i][1];
    const situacao = nota >= 7 ? "Aprovado" : nota <= 5 ? "Reprovado" : "Recuperação";
    candidatos[i].push(situacao);
    console.log('---------------------');
    console.log(`Item: ${i+1}`);
    console.log(`Candidato: ${candidato[0]} - Nota: ${candidato[1]} - Situação: ${candidato[2]}`);
};