// Ejercicio 4

function pasoUno() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Paso 1: Tengo mi cachopo. :D");
        },  800);
    });
}

function pasoDos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Paso 2: Me estoy comiendo el cachopo.");
        },  1500);
    });
}

function pasoTres() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Paso 3: Se acabo el cachopo. :'(");
        },  3000);
    });
}

pasoUno()
    .then(resultado1 => {
        console.log(resultado1);
        return pasoDos();
    })
    .then(resultado2 => {
        console.log(resultado2);
        return pasoTres();
    })
    .then(resultado3 => console.log(resultado3))
    .catch(error => console.log("Error en los pasos: ", error));
