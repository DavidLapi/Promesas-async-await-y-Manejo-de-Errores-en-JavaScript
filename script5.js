// Ejercicio 5

function dividir(a, b) {
    let division = a / b;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(b <= 0) {
                reject(new Error("La b no tiene que ser 0 o menos."));
            } else {
                resolve("Se dividen " + a + " y " + b +  ": " + division);
            }
        }, 1000);
    });
}

async function hacerDivision() {
    try {
        const resultado = await dividir(10, 0);
        console.log(resultado);
    } catch(error) {
        console.log("Aquí está el error: ", error);
    }
}

hacerDivision();