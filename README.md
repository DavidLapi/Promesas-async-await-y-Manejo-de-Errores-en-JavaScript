# Promesas-async-await-y-Manejo-de-Errores-en-JavaScript

<h2>Entrega de ejercicios</h2>

<p>Recuerda que la entrega de los ejercicios se hará a través de un repositorio en GitHub.<br>
Cuando lo tengas listo, comparte el enlace del repositorio por Discord directamente con las
formadoras.</p>

<h2>🧪 EJERCICIO 1: Promesa básica con .then()</h2>
<p><strong>🎯 Objetivo: Entender cómo funciona una promesa simple.</strong></p>
<p>🪜 Paso a paso:</p>
<ol>
  <li>Crea un archivo llamado script.js en tu proyecto.</li>
  <li>Escribe la función 'crearSaludo' que devuelva una promesa que se resuelve tras 1
segundo.</li>
  <li>Llama a esa función pasándole tu nombre como argumento.</li>
  <li>Usa .then() para recibir la respuesta y mostrarla en la consola.</li>
  <li>Abre la consola del navegador y comprueba que aparece el mensaje 'Hola, [tu nombre]'.</li>
</ol>

<h2>🧪 EJERCICIO 2: Rechazo con .catch()</h2>
<p><strong>🎯 Objetivo: Manejar errores cuando una promesa se rechaza.</strong></p>
<p>🪜 Paso a paso:</p>
<ol>
  <li>Escribe una función 'calcularEdad' que reciba un nombre y devuelva una promesa.</li>
  <li>La promesa debe rechazarse si el nombre es 'Desconocido'.</li>
  <li>Llama a la función con el nombre 'Desconocido'.</li>
  <li>Usa .then() y .catch() para mostrar el resultado o el error en consola.</li>
  <li>Comprueba que el error aparece correctamente.</li>
</ol>

<h2>🧪 EJERCICIO 3: Usar async y await</h2>
<p><strong>🎯 Objetivo: Simplificar una promesa usando async/await.</strong></p>
<p>🪜 Paso a paso:</p>
<ol>
  <li>Escribe una función 'buscarUsuario' que devuelva una promesa con un mensaje tras 1.5
segundos.</li>
  <li>Crea una función async llamada 'mostrarUsuario'.</li>
  <li>Dentro de ella, usa await para esperar el resultado de obtenerUsuario.</li>
  <li>Muestra el mensaje en consola.</li>
  <li>Llama a 'mostrarUsuario' y revisa el resultado en consola.</li>
</ol>

<h2>🧪 EJERCICIO 4: Encadenar varias promesas con .then()</h2>
<p><strong>🎯 Objetivo: Practicar cómo conectar varias promesas entre sí.</strong></p>
<p>🪜 Paso a paso:</p>
<ol>
  <li>Crea tres funciones llamadas pasoUno, pasoDos y pasoTres, que devuelvan promesas
resueltas con distintos mensajes.</li>
  <li>Llama primero a pasoUno y luego encadena pasoDos y pasoTres con .then().</li>
  <li>Después de cada .then(), imprime el resultado en consola.</li>
  <li>Comprueba que los mensajes aparecen en el orden correcto.</li>
</ol>

<h2>🧪 EJERCICIO 5: Manejo de errores con try / catch</h2>
<p><strong>🎯 Objetivo: Atrapar errores dentro de una función async.</strong></p>
<p>🪜 Paso a paso:</p>
<ol>
  <li>Escribe una función 'dividir' que devuelva una promesa: si b es 0, rechaza con un error.</li> 
  <li>Crea una función async 'hacerDivision'.</li>
  <li>Dentro, usa try/catch para capturar el error si existe.</li>
  <li>Usa await para llamar a dividir(10, 0) y muestra el resultado o el error.</li>
  <li>Comprueba que el error aparece correctamente en consola.</li>
</ol>
