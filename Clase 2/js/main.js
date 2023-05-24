/*console.log("Inicio");
let temperatura = "mal";

if (condicion = "mal"){
    alert("Serás castigada");
}

console.log("Final");*/

/*let nombre = prompt("Ingrese su nombre");

if (nombre=="Juan"){
    alert("Bienvenido Jauncho");
} else{
    alert("Bienvenido/a: " + nombre);
}*/

let peso = parseFloat(prompt("Ingrese su peso:"));
let altura = parseFloat(prompt("Ingrese su altura"));
let imc = peso/(altura*altura);

alert("Tu IMC es = " + imc.toFixed(2));

if(imc <= 18.5){
    alert("Tu IMC esta bajo");
}else if((imc > 18.5) && (imc <= 24.9)){
    alert("Tu IMC esta normal :)");
}else if((imc > 24.9) && (imc <=29.9)){
    alert("Tu IMC se encuentra en el nivel 1 de obesidad");
}else{
    alert("Estas fatal!");
}