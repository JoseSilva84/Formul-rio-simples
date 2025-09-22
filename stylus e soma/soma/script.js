const valor1 = document.getElementById("valor1").value;
const valor2 = document.getElementById("valor2").value;
const resultado = document.getElementById("resultado");

document.getElementById("somar").addEventListener('click', () => {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    resultado.innerHTML = `${valor1} + ${valor2} = ${valor1 + valor2}`;
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
});


