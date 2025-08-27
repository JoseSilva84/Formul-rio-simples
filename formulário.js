
document.getElementById("enviar").addEventListener('click',(evento)=>{
    evento.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    alert(`Dados enviados\nNome: ${nome}\nE-mail: ${email}`);
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
});