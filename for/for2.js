const frase = "Olá! Tudo bem? Como você está?";

console.log(`Quantidade de letras: ${frase.length}`);

for (let i = 0; i < frase.length; i++) {
    console.log("Posição", i, "letra", frase[i]);
}
console.log('================================');
const novaFrase = frase.replace("bem", "ok");
console.log(novaFrase);
console.log('================================');
const trocaLetra = frase.replaceAll("o", "a");
console.log(trocaLetra);
const pesquisa = frase.includes("bem");
console.log(pesquisa);

console.log("========================");
const numero = 1;

for (let i = 0; i <=10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}