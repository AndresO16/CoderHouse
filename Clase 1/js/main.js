alert("Hola mundo 2")

let nombre = "Andres"; //Variable de tipo String
let apellido = "Olarte";
var edad = 27; // Variable númerica (entera)
const anioNacimiento = 1996; // Constante que posee un dato tipo numerico. Solo  se define una vez

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(anioNacimiento);

let peso = parseFloat(prompt("Ingrese su peso"));
let altura = parseFloat(prompt("Ingrese su altura"));
let imc = (peso/(altura*altura))/100;

alert("Tu IMC es: " + imc.toFixed(2) + "%");

