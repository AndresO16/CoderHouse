// Definir funciones que se van a utilizar

//Funcion que calcula el tipo de prenda y el valor de las prendas seleccionadas
const calcularValor = (cantPrenda) => {
    let i = 0;
    let total = parseInt(0);

    while (i < cantPrenda){
        // Solicito el tipo de prenda: zapatilla, pantalón, chaqueta...
        let valor = 0;
        let prenda = parseInt(prompt("Registro de prenda: " + (i+1) + "\n\n Seleccione el tipo de prenda: \n\n" + "1-Zapatillas \n" 
        + "2-Pantalón \n" + "3-Camiseta \n" + "4-Chaqueta"));

        switch (prenda) {
            case 1: 
                tipoPrenda = "Zapatilla";
                break;
            case 2: 
                tipoPrenda = "Pantalon";
                break;
            case 3:
                tipoPrenda = "Camiseta";
                break
            case 4:
                tipoPrenda = "Chaqueta";
                break;
            default:
                alert = "No selecciono ninguna prenda";
                break;
        }

        // Condicional para asignar el valor a cada zapatilla
        if (tipoPrenda == "Zapatilla") {
            let marcaZapatilla = parseInt(prompt("Seleccione la marca de las zapatillas: \n\n" + "1-Puma \n" + "2-Nike \n" + "3-Adidas"));
            if (marcaZapatilla == 1){
                valor = 299000;
            }else if(marcaZapatilla == 2){
                valor = 457950;
            }else if(marcaZapatilla == 3){
                valor = 269950;
            }  
        }

        // Condicional para asignar el valor a cada pantalón
        if (tipoPrenda == "Pantalon") {
            let marcaPantalon = parseInt(prompt("Seleccione la marca del pantalón: \n\n" + "1-Levis \n" + "2-Americanino \n" + "3-Chevignon"));
            if (marcaPantalon == 1){
                valor = 319900;
            }else if(marcaPantalon == 2){
                valor = 269900;
            }else if(marcaPantalon == 3){
                valor = 239900;
            }  
        }

        // Condicional para asignar el valor a cada camiseta
        if (tipoPrenda == "Camiseta") {
            let marcaCamiseta = parseInt(prompt("Seleccione la marca de la camiseta: \n\n" + "1-Lacoste \n" + "2-Tommy Hilfiger \n" + "3-Edmmond"));
            if (marcaCamiseta == 1){
                valor = 295800;
            }else if(marcaCamiseta == 2){
                valor = 229900;
            }else if(marcaCamiseta == 3){
                valor = 197200;
            }  
        }

        // Condicional para asignar el valor a cada chaqueta
        if (tipoPrenda == "Chaqueta") {
            let marcaChaqueta = parseInt(prompt("Seleccione la marca de la chaqueta: \n\n" + "1-The North Face \n" + "2-North Sails \n" + "3-Rip Curl"));
            if (marcaChaqueta == 1){
                valor = 1232800;
            }else if(marcaChaqueta == 2){
                valor = 736900;
            }else if(marcaChaqueta == 3){
                valor = 510200;
            }  
        }
        i++;
        total = total + valor;
    }
    return total;
}

// Función que calcula el iva de la compra
const calcularIva = (total, iva) => {
    return Math.trunc((total*iva)/100);
}

// Función que obtiene el descuento de la compra
const obtenerDescuento = (cantPrenda) => {
    let descuento = 0;
    if (cantPrenda == 2){
        descuento = 8;
    }else if(cantPrenda == 3){
        descuento = 15;
    }else if(cantPrenda > 3){
        descuento = 20;
    }
    return descuento;
}

// Función que calcula el descuento total de la compra
const calcularDescuento = (total, descuento) => {
    return (total*descuento)/100;
}

// Función que calcula el valor total de la compra
const calcularValorTotal = (total, iva, descuento) =>{
    return Math.trunc((total+iva) - descuento);
}

// Función que muestra por consola el resultado del procedimiento
const mostrarLog = (cantPrenda, total, iva, tipoDescuento, descuento, valorTotal) => {
    console.log("Cantidad de prendas registradas: " + cantPrenda);
    console.log("Valor de la compra: $ " + total);
    console.log("Valor IVA (19%): $ " + iva);
    console.log("Descuento: " + tipoDescuento + "%");
    console.log("Valor descuento: $ " + descuento);
    console.log("Valor total de la compra: $ " + valorTotal);
}

// Función que muestra por pantalla el resultado del procedimiento
const mostrarDatos = (cantPrenda, total, iva, tipoDescuento, descuento, valorTotal) => {
    let salida = "SIMULADOR CAJA TIENDA DE ROPA\n\n";
    salida += "Cantidad de prendas registradas: " + cantPrenda + "\n";
    salida += "Valor de la compra: $ " + total + "\n";
    salida += "Valor IVA (19%): $ " + iva + "\n";
    salida += "Descuento: " + tipoDescuento + "%" + "\n";
    salida += "Valor descuento: $ " + descuento + "\n";
    salida += "Valor total de la compra: $ " + valorTotal + "\n";
    alert(salida);
}
