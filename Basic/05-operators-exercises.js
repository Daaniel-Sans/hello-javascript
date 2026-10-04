/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
console.log("1. Crea una variable para cada operación aritmética \n");
let suma = 2+2
let resta = 2-2
let multiplicacion = 2*2
let division = 2/2
let modulo = 2%2
let exponente = 2 ** 2

console.log("suma")
console.log("resta")
console.log("multiplicacion")
console.log("division")
console.log("modulo")
console.log("exponente")


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log("\n 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas\n");
let numero = 10;

numero += suma;           
console.log(numero);

numero -= resta;          
console.log(numero);

numero *= multiplicacion; 
console.log(numero);

numero /= division;      
console.log(numero);

numero %= exponente;  
console.log(numero);

numero **= exponente; 
console.log(numero);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("\n 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación \n");
console.log(4>2);
console.log(2<4);
console.log(4>=4);
console.log(10 !== "10");
console.log(10 === 10);


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("\n 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación \n");
console.log(4<2);
console.log(2>4);
console.log(3>=4);
console.log(10 !== 10);
console.log(10 === "10");

// 5. Utiliza el operador lógico and
console.log("\n 5. Utiliza el operador lógico and \n")
console.log(10 > 5 && 3 < 8);

// 6. Utiliza el operador lógico or
console.log("\n 6. Utiliza el operador lógico or \n")
console.log(10 < 5 || 3 < 8);

// 7. Combina ambos operadores lógicos
console.log("\n 7. Combina ambos operadores lógicos \n")
console.log((10 > 5 && 3 > 8) || 5 === 5);

// 8. Añade alguna negación
console.log("\n 8. Añade alguna negación \n")
console.log(!(10 > 5));

// 9. Utiliza el operador ternario
console.log("\n 9. Utiliza el operador ternario \n")
let edad = 18;
let esMayorDeEdad = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(esMayorDeEdad);

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("\n 10. Combina operadores aritméticos, de comparáción y lógicas \n")
console.log(5 + 5 === 10 && 2 * 3 > 4);