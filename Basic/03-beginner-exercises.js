/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
console.log("\n ejercicio 1: Escribe un comentario en una línea \n");

//Mi comentario en una línea

// 2. Escribe un comentario en varias líneas
console.log("\n ejercicio 2: Escribe un comentario en varias líneas \n");

/*mi comentario
en varias
líneas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
console.log("\n ejercicio 3: Declara variables con valores asociados a todos los datos de tipo primitivos \n");

let string = "hola";
let integer = 2;
let decimal = 3.23;
let bool = true;
let myUndefined;
let nullValue = null;
let symbol = Symbol("Symbol");
let myBigInt = BigInt("817239871289371986589716389471628379612983761289376129");
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n;

// 4. Imprime por consola el valor de todas las variables
console.log("\n ejercicio 4: Imprime por consola el valor de todas las variables \n");
console.log(string);
console.log(integer);
console.log(decimal);
console.log(bool);
console.log(myUndefined);
console.log(nullValue);
console.log(symbol);
console.log(myBigInt);
console.log(myBigInt2);

// 5. Imprime por consola el tipo de todas las variables
console.log("\n ejercicio 5: Imprime por consola el tipo de todas las variables \n");
console.log(typeof string);
console.log(typeof integer);
console.log(typeof decimal);
console.log(typeof bool);
console.log(typeof myUndefined);
console.log(typeof nullValue);
console.log(typeof symbol);
console.log(typeof myBigInt);
console.log(typeof myBigInt2);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
console.log("\n ejercicio 6: modifica los valores de las variables por otros del mismo tipo \n");
string = "Hey";
integer = 4;
decimal = 4.89;
bool = false;
myUndefined = undefined;
nullValue = null;
symbol = Symbol("Symbol2");
myBigInt = BigInt("117239871289371986589716389471628379612983761289376129");
myBigInt2 = 117239871289371986589716389471628379612983761289376129n;
console.log(string);
console.log(integer);
console.log(decimal);
console.log(bool);
console.log(myUndefined);
console.log(nullValue);
console.log(symbol);
console.log(myBigInt);
console.log(myBigInt2);
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
console.log("\n ejercicio 7: modifica los valores de las variables por otros de distinto tipo\n");
string = 3;
integer = "Hola";
decimal = 4;
bool = null;
myUndefined = "hola, estoy definido";
nullValue = undefined;
symbol = 10;
myBigInt = true;
myBigInt2 = false;
console.log(string);
console.log(integer);
console.log(decimal);
console.log(bool);
console.log(myUndefined);
console.log(nullValue);
console.log(symbol);
console.log(myBigInt);
console.log(myBigInt2);
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
console.log("\n ejercicio 8: Declara constantes con valores asociados a todos los tipos de datos primitivos\n");
const constString = "Hola constante";
const constNumber = 42;
const constBool = true;
const constUndefined = undefined;
const constNull = null;
const constSymbol = Symbol("constSymbol");
const constBigInt = 100n;
// 9. A continuación, modifica los valores de las constantes
console.log("\n ejercicio 9: modifica los valores de las constantes\n");
/*console.log("\n ejercicio 9: modifica los valores de las constantes\n");
constString = "Nuevo texto";
constNumber = 24;
constBool = false;
constUndefined = "estoy intentando definirme";
constNull = "algo";
constSymbol = "simbolo";
constBigInt = "un número muy grande";*/
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
console.log("\n ejercicio 10: Comenta las líneas que produzcan algún tipo de error al ejecutarse\n");