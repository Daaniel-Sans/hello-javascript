/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let myArray = ["pato","gallina","ganso","pavo","perdiz"]
console.log(myArray)


// 2. Añade dos más. Uno al principio y otro al final

myArray.unshift("agaporni")
myArray.push("lechuza")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(3,1)


// 4. Crea un set que almacene cinco libros

let setLibros = new Set()
setLibros = new Set (['Harry Potter 1', 'Harry Potter 2', 'Harry Potter 3','Harry Potter 4','Harry Potter 5'])
console.log(setLibros)

// 5. Añade dos más. Uno de ellos repetido

setLibros.add("Harry Potter 6", "Harry Potter 1")
console.log(setLibros)

// 6. Elimina uno concreto a tu elección

setLibros.delete("Harry Potter 6")
console.log(setLibros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map()

myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(myMap)


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.has(5))
console.log(myMap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

myMap.set(13, ['Junio', 'Julio', 'Agosto'])
console.log(myMap)


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

const myArray2 = ["JavaScript", "Python", "JavaScript", "C++"]

const mySet = new Set(myArray2)

const myMap2 = new Map()
myMap2.set("lenguajes", mySet)

console.log(myMap2)