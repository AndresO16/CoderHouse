class cajaRegistradora {

    constructor(){
        this.productos = []
    }

    agregarProducto(marca, precio){
        this.productos.push({id:this.generarId(), marca:marca.toLocaleUpperCase(), precio:precio});
	console.log("Agregaste un producto");
    }

    eliminarProducto(id){
        this.productos = this.productos.filter(item => item.id != id);
    }

    totalProductos(){
        return this.productos.length;
    }

    generarId(){
        let max = 0;
    
        this.productos.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });

        return max + 1;
    }

    valorCompra() {
        let compra = 0;

        this.productos.forEach(item => {
            compra += item.precio;
        });

        return compra;
    }

    listarProductos() {
        let contenido = "Productos agregados:\n\n";

        this.productos.forEach(item => {
            contenido += `${item.id} - ${item.nombre} $${item.precio}\n` 
        });

        return contenido;
    }
}

class Stock{

    baseDeDatos = [{id: 1, marca: 'AGV', precio: 1550000}, 
                    {id: 2, marca: 'BELL', precio: 550000},
                    {id: 3, marca: 'ICON', precio: 750000},
                    {id: 4, marca: 'SHAT', precio: 400000},
                    {id: 5, marca: 'MT Helmets', precio: 600000},
                    {id: 6, marca: 'SCORPION', precio: 800000}];

    listarProductos() {
        let contenido = "";
                
        this.baseDeDatos.forEach(item => {
            contenido += `${item.id} - ${item.marca} $${item.precio}\n` 
        });      
        return contenido;
    }

    totalProductos(){
        return this.baseDeDatos.length;
    }

}
const compra = new cajaRegistradora();
const stock = new Stock();
let marca = "";
let precio = 0;
let seleccion = "";
                        
// Agregar Productos
while (seleccion.toLocaleUpperCase() != "ESC") {
    seleccion = prompt("Seleccione el producto que va a facturar:\n(ESCRIBA ESC PARA SALIR)\n\n" + (`${stock.listarProductos()}`));
    if (seleccion.toLocaleUpperCase() == "ESC") {
        break;
    }

    if(seleccion == 1){
        marca = stock.baseDeDatos[0].marca;
        precio = stock.baseDeDatos[0].precio;  
    }else if(seleccion == 2){
        marca = stock.baseDeDatos[1].marca;
        precio = stock.baseDeDatos[1].precio;
    }else if(seleccion == 3){
        marca = stock.baseDeDatos[2].marca;
        precio = stock.baseDeDatos[2].precio;
    }else if(seleccion == 4){
        marca = stock.baseDeDatos[3].marca;
        precio = stock.baseDeDatos[3].precio;
    }else if(seleccion == 5){
        marca = stock.baseDeDatos[4].marca;
        precio = stock.baseDeDatos[4].precio;
    }else if(seleccion == 6){
        marca = stock.baseDeDatos[5].marca;
        precio = stock.baseDeDatos[5].precio;
    }

    compra.agregarProducto(marca, precio);
}

// Validar si se han agregado productos
if (compra.totalProductos() > 0) {
    let id;

    // Eliminar Productos
    while (id != 0) {
        id = parseInt(prompt(compra.listarProductos() + "\nIngrese el ID del Producto a Eliminar:\n(SI NO DESEA ELIMINAR NINGÚN PRODUCTO, ESCRIBA '0')"));
        
        if (id > 0) {
            compra.eliminarProducto(id);
        }
    
        if (compra.totalProductos() == 0) {
            break;
        }
    }

    // Mostrar los productos agregados
    alert(`${compra.listarProductos()}\nTotal a Pagar: $${compra.valorCompra()}\n\n ¡GRACIAS POR LA COMPRA!`);
} else {
    alert("No se encontraron Productos agregados para facturar!");
}

