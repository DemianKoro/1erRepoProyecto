class Remera {

    constructor(id, nombre, precio) {

        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.cantidad = parseInt(cantidad);
        this.envio = 0;
        this.subTotal = 0;
        this.descuento = 0;
        this.total = 0;
    }

    calcularSubTotal() {
        return this.subTotal = this.precio * this.cantidad;
    }

    calcularIva() {
        return this.subtotal = this.subTotal * 0.21;
    }
    
     calcularEnvio() {
        if(this.subTotal * 1.21 >= 14000) {
            this.envio = 0;
            return this.envio;
        } else {
            this.envio = 800;
            return this.envio;
        }
    }

    calcularDescuento() {
        if(this.cantidad >=2) {
            this.descuento = this.subTotal * 0.1;
            return this.descuento;
        } else {
            this.descuento = 0;
            return this.descuento;
        }
    }

    calcularTotal() {
        this.total = this.subTotal + this.envio - this.descuento + this.calcularIva();
        return this.total;
    }

    getId() {

        return this.id;
    }

    getNombre() {

        return this.nombre;
    }

    getPrecio() {

        return this.precio;
    }
   
    setCantidad(cantidad) {
        this.cantidad = parseInt(cantidad);
        return this.cantidad;
    }

}

let remera1 = new Remera(1, 'Remera Rayo', '3700');
let remera2 = new Remera(2, 'Remera Tigre', '3800');
let remera3 = new Remera(3, 'Remera León', '4000');
let remera4 = new Remera(4, 'Remera Luna', '4300');
let remera5 = new Remera(5, 'Remera Sol', '4500');
let remera6 = new Remera(6, 'Remera Puente', '4800');
let remera7 = new Remera(7, 'Remera Moria', '5000');

let arregloRemera = new Array () ;
arregloRemera.push(remera1);
arregloRemera.push(remera2);
arregloRemera.push(remera3);
arregloRemera.push(remera4);
arregloRemera.push(remera5);
arregloRemera.push(remera6);
arregloRemera.push(remera7);