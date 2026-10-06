/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++){
    console.log(`${i}`)
}

let i = 1

while (i <= 20) {
    console.log(i)
    i++ // Incrementamos el contador para evitar un bucle infinito
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 2; i <= 50; i += 2) {
    console.log(i)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Marta", "Ana" ,"Pepe", "Gregorio"]

for (let valor of nombres){
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

const texto = "Hola Javascript";
const vocales = "aeiouAEIOU";
let contador = 0;

for (const caracter of texto) {
  if (vocales.includes(caracter)) {
    contador++;
  }
}

console.log(`El texto tiene ${contador} vocales.`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [1,2,3,4,5,6]
let producto = 1

for (let num of numeros) {
   producto *= num
}

console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let numero = 5
let ib = 1

while (ib <= 10) {
    console.log(`${numero} x ${ib} = ${numero * ib}`)
    ib++
}

// 8. Usa un bucle para invertir una cadena de texto

const cadenaOriginal = "JavaScript";
let cadenaInvertida = "";

for (let i = cadenaOriginal.length - 1; i >= 0; i--) {
  cadenaInvertida += cadenaOriginal[i];
}

console.log(cadenaInvertida); // "tpircSavaJ"

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fib = [0, 1]

while (fib.length < 10) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2])
}

console.log(fib) 

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const arrayNumeros = [5, 12, 8, 130, 44, 2, 9, 15]
const mayoresA10 = []

for (const num of arrayNumeros) {
    if (num > 10) {
        mayoresA10.push(num)
    }
}

console.log(mayoresA10)