

let nombre = 0;
let precio = 0;
let cantidadRemeras = 0;


class Producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.cantidad = parseInt(cantidadRemeras);
        this.envio = 0;
        this.subTotal = 0;
        this.descuento = 0;
        this.total = 0;
    }

    calcularSubTotal() {
        this.subTotal = this.precio * this.cantidad;
        console.log(this.subTotal);
    }

    calcularIva() {
        return this.subtotal = this.subTotal * 0.21;
    }
    
     calcularEnvio() {
        if(this.subTotal * 1.21 >= 14000) {
            this.envio = 0;
        } else {
            this.envio = 800;
        }
    }

    calcularDescuento() {
        if(this.cantidad >=2) {
            this.descuento = this.subTotal * 0.1;
        } else {
            this.descuento = 0;
        }
    }

    calcularTotal() {
        this.total = this.subTotal + this.envio - this.descuento + this.calcularIva();
    }
}

const productos = [];

const producto1 = new Producto("Remera Rayo", "3700");
productos.push(producto1);

const producto2 = new Producto("Remera Tigre", "3800");
productos.push(producto2);

const producto3 = new Producto("Remera Lyon", "4000");
productos.push(producto3);

const producto4 = new Producto("Remera Luna", "4300");
productos.push(producto4);

const producto5 = new Producto("Remera Sol", "4500");
productos.push(producto5);


console.log (productos);
console.log (productos.length);


function compraRemeras() {
    while(!nombre || nombre == 0 || nombre > 5) {
        nombre = parseInt(prompt("♦ ¿Qué remera desea comprar? :\n 1: Remera Rayo ($3700).\n 2: Remera Tigre ($3800).\n 3: Remera Lyon ($4000).\n 4: Remera Luna ($4300).\n 5: Remera Sol ($4500)."));
    }

    switch(nombre){

        case 1:
            nombre = producto1.nombre;
            precio = producto1.precio;
            break;
        case 2:
            nombre = producto2.nombre;
            precio = producto2.precio;
            break;
        case 3:
            nombre = producto3.nombre;
            precio = producto3.precio;
            break;
        case 4:
            nombre = producto4.nombre;
            precio = producto4.precio;
            break;
        case 5:
            nombre = producto5.nombre;
            precio = producto5.precio;
            break;
    }

    while(!cantidadRemeras || cantidadRemeras == 0){
        cantidadRemeras = parseInt(prompt("Remera elegida: "+ nombre + " ♥\n Introduzca la cantidad de " + nombre + " deseada. (Solo números.)"));
    }

    return new Producto(nombre, precio);
}

alert("Bienvenido a Kalanchoe ♀ Tu tienda virtual de Indumentaria Femenina.");

const compra = compraRemeras();

compra.calcularSubTotal();
compra.calcularIva();
compra.calcularEnvio();
compra.calcularDescuento();
compra.calcularTotal();

alert("KALANCHOE ♀ Agradece su compra.\n"+
      "\n"+
      "♦ Detalle de la compra:\n"+
      "♦ " + compra.nombre + " x " + compra.cantidad + ": $" + compra.precio * compra.cantidad +"\n" +
      "♦ IVA 21% = $" + compra.calcularIva() + "\n" +
      "♦ Descuento 10% OFF (Llevando más de dos remeras): $" + compra.descuento + "\n" +
      "♦ Costo de envío = $" + compra.envio + "\n" +
      "♦ Total = $" + compra.total
);

alert("Gracias por visitarnos - Vuelva pronto!!!\n"+
      "\n"+
      "            KALANCHOE ♀."
);