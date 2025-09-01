const resultadoPesquisa = [];
let salario = 0;
let numeroFilhos = 0;


for(let cont = 1; cont <=20; cont++){
    salario = Math.round(Math.random() * 3000 + 1500);
    numeroFilhos = Math.round(Math.random() * 3);
    resultadoPesquisa.push([salario, numeroFilhos]);
}
console.log(salario, numeroFilhos);
console.log(resultadoPesquisa);

// for (let cont = 0; cont <= resultadoPesquisa.length; cont++){
//     const totalSalario = resultadoPesquisa[cont][0];
//     console.log(totalSalario)
// }