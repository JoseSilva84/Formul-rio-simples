const numero = 1;

for (let i=1; i <20; i++) {
    const cinco = () => {
        if (numero * i === 5) {
            console.log('Cinco!');
        }
    };
    console.log(`${numero} x ${i} = ${numero * i}`);
    cinco();
};