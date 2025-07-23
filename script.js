//Ejercicio 1

function crearSaludo(nombre) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hola, ", nombre);
        }, 1000);
    });
}

let nombre = "Antonio";

crearSaludo(nombre)
  .then(resultado => console.log(resultado))
