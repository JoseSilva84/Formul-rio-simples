const pessoas = [
    { nome: "José", idade: 41 },
    { nome: "Nyânata", idade: 38 },
    { nome: "Jessé", idade: 8 },
    { nome: "Noemi", idade: 5 },
    { nome: "Noá", idade: 2 }
]

console.log("---------------------")
for (let i = 0; i < pessoas.length; i++) {
    console.log(i, pessoas[i])
}
console.log("---------------------")

console.log("---------------------")
for (let pessoa in pessoas) {
    console.log(pessoa, pessoas[pessoa])
}
console.log("---------------------")

console.log("---------------------")
for (let nome of pessoas) {
    console.log(nome.nome)
    console.log(nome.idade)
}
console.log("---------------------")
