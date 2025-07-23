//Ejercicio 2

function calcularEdad(edad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (edad != "Desconocido") {
                resolve("Exito");
            } else {
                reject(new Error("La operación fallo."));
            }
        }, 1000);
    });
}

let nombre = "Desconocido";

calcularEdad(nombre)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));
