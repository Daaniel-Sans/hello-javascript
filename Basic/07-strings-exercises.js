/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
console.log("1. Concatena dos cadenas de texto \n");

let nombre = "Pepito";
let saludito = "Holaaa " + nombre;
console.log(saludito);

// 2. Muestra la longitud de una cadena de texto
console.log("\n 2. Muestra la longitud de una cadena de texto \n");

console.log(saludito.length);

// 3. Muestra el primer y último carácter de un string
console.log("\n 3. Muestra el primer y último carácter de un string \n");

console.log(saludito[0] + " y " + saludito[saludito.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log("\n 4. Convierte a mayúsculas y minúsculas un string \n");

console.log(saludito.toUpperCase());
console.log(saludito.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
console.log("\n 5. Crea una cadena de texto en varias líneas \n");

console.log(`Un saludito
en varias
líneas`);

// 6. Interpola el valor de una variable en un string
console.log("\n 6. Interpola el valor de una variable en un string \n");

let saludo = "saludito"
console.log(`¡¡Un ${saludo} para ${nombre}!!`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log("\n 7. Reemplaza todos los espacios en blanco de un string por guiones \n");

console.log(saludito.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log("\n 8. Comprueba si una cadena de texto contiene una palabra concreta \n");

console.log(saludo.includes("Holaaa"))
console.log(saludito.includes("Holaaa"))

// 9. Comprueba si dos strings son iguales
console.log("\n 9. Comprueba si dos strings son iguales \n");

console.log(saludo === saludito);

// 10. Comprueba si dos strings tienen la misma longitud
console.log("\n 10. Comprueba si dos strings tienen la misma longitud \n");

console.log(saludo.length === saludito.length);