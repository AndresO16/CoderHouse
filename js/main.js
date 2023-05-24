// Definición de variables
const iva = 19;

// Entrada de datos
// Solicito el número de prendas que lleva el usuario
let cantPrenda = parseInt(prompt("Ingrese el número de prendas que lleva el usuario"));
// Solicito marca de prenda seleccionada y calculo el valor total de la compra
let valorCompra = calcularValor(cantPrenda);
// Calculo el iva de la compra
let totalIva = calcularIva(valorCompra, iva);
// Calculo el tipo de descuento de acuerdo al número de prendas que lleva el cliente
let tipoDescuento = obtenerDescuento(cantPrenda);
// Calculo el descuento de la compra
let descuento = calcularDescuento(valorCompra, tipoDescuento);
// Calculo el valor que debe pagar el cliente
let total = calcularValorTotal(valorCompra, totalIva, descuento);

// Muestro los datos por consola
mostrarLog(cantPrenda, valorCompra, totalIva, tipoDescuento, descuento, total);
// Muestro los datos
mostrarDatos(cantPrenda, valorCompra, totalIva, tipoDescuento, descuento, total);
