const resultadoPesquisa = [];
let salario = 0;
let numeroFilhos = 0;
let salarioTotal = 0;
let filhoTotal = 0;

for(let cont = 1; cont <=20; cont++){
    salario = Math.round(Math.random() * 3000 + 1500);
    numeroFilhos = Math.round(Math.random() * 3);
    resultadoPesquisa.push([salario, numeroFilhos]);
    salarioTotal += Number(salario);
    filhoTotal += Number(numeroFilhos);
}
console.log(Number(resultadoPesquisa[0][0]) + Number(resultadoPesquisa[1][0]));
console.log('================================')
console.log(`Salário total: ${salarioTotal}`);
console.log(`Filhos no total: ${filhoTotal}`);
console.log('================================')
console.log(resultadoPesquisa);

// for (let cont = 0; cont <= resultadoPesquisa.length; cont++){
//     const totalSalario = resultadoPesquisa[cont][0];
//     console.log(totalSalario)
// }