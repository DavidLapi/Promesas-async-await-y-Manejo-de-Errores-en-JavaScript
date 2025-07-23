//Ejercicio 3

function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Aquí está mi nombre.");
        }, 1500);
    });
}

async function mostrarUsuario() {
    try {
        const resultado = await buscarUsuario();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

mostrarUsuario();