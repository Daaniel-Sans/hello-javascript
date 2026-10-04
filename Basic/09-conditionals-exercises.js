/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = 1;
if (myName==1) {
    console.log("Daniel-Sans");
};

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "admin1234";
let password = "admin1234";

if (user === "admin1234" && password === "admin1234") {
    console.log("Bienvenid@");
} else {
    console.log("Algo has hecho mal");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -67;

if (number > 0){
    console.log("el número es positivo")
} else if (number === 0) {
    console.log("el número es 0")
} else if (number < 0){
    console.log("el número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edadUsuario = 15;
if (edadUsuario >= 18) {
    console.log("Tienes edad para votar");
} else {
    let edadRestante = 18 - edadUsuario;
    console.log(`La edad legal para votar es de 18 años pero tú tienes ${edadUsuario}, así que todavía te faltan ${edadRestante} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edadPersona = 33;
let Categoria = edadPersona >= 18 ? "adulto" : "menor";
console.log(Categoria); // "adulto"

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 1;

if (mes === 12 || mes === 1 || mes === 2) {
    console.log("Invierno");
} else if (mes >= 3 && mes <= 5) {
    console.log("Primavera");
} else if (mes >= 6 && mes <= 8) {
    console.log("Verano");
} else if (mes >= 9 && mes <= 11) {
    console.log("Otoño");
} else {
    console.log("Mes no válido: Introduce un número del 1 al 12");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes === 2) {
    console.log("Tiene 28 o 29 días");
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    console.log("Tiene 30 días");
} else if (mes >= 1 && mes <= 12) {
    console.log("Tiene 31 días");
} else {
    console.log("Mes no válido");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "ja"; //japonés

switch (idioma) {
    case "es":
        console.log("¡Hola!");
        break;
    case "en":
        console.log("Hello!");
        break;
    case "ja":
        console.log("こんにちは");
        break;
    default:
        console.log("Idioma no soportado");
}


// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case 3:
    case 4:
    case 5:
        console.log("primavera");
        break;
    case 6:
    case 7:
    case 8:
        console.log("verano");
        break;
    case 9:
    case 10:
    case 11:
        console.log("otoño");
        break;
    case 12:
    case 1:
    case 2:
        console.log("invierno");
        break;
    default:
        console.log("Introduce un número del 1 al 12");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case 2:
        console.log("Tiene 28 o 29 días");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Tiene 30 días");
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Tiene 31 días");
        break;
    default:
        console.log("Mes no válido");
}