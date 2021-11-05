// let nombre = 0;
// let precio = 0;
// let cantidadRemeras = 0;


// class Producto {
//     constructor(nombre, precio){
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//         this.cantidad = parseInt(cantidadRemeras);
//         this.envio = 0;
//         this.subTotal = 0;
//         this.descuento = 0;
//         this.total = 0;
//     }

//     calcularSubTotal() {
//         this.subTotal = this.precio * this.cantidad;
//         console.log(this.subTotal);
//     }

//     calcularIva() {
//         return this.subtotal = this.subTotal * 0.21;
//     }
    
//      calcularEnvio() {
//         if(this.subTotal * 1.21 >= 14000) {
//             this.envio = 0;
//         } else {
//             this.envio = 800;
//         }
//     }

//     calcularDescuento() {
//         if(this.cantidad >=2) {
//             this.descuento = this.subTotal * 0.1;
//         } else {
//             this.descuento = 0;
//         }
//     }

//     calcularTotal() {
//         this.total = this.subTotal + this.envio - this.descuento + this.calcularIva();
//     }
// }

// const productos = [];

// const producto = new Producto("Remera Rayo", "3700");
// productos.push(producto1);

// const producto = new Producto("Remera Tigre", "3800");
// productos.push(producto2);

// const producto = new Producto("Remera Lyon", "4000");
// productos.push(producto3);

// const producto = new Producto("Remera Luna", "4300");
// productos.push(producto4);

// const producto = new Producto("Remera Sol", "4500");
// productos.push(producto5);


$("#addCompra").click(function () {

    nombre = document.getElementById("selectorRemeras");
         
    console.log(nombre.value);
    localStorage.setItem("nombre", nombre.value);

    // if (nombre.value == 1){
    //     nombre = productos1.nombre;
    //     precio = productos1.precio;
    // }
    // if (nombre.value == 2){
    //     nombre = productos2.nombre;
    //     precio = productos2.precio;
    // }
    // if (nombre.value == 3){
    //     nombre = productos3.nombre;
    //     precio = productos3.precio;
    // }
    // if (nombre.value == 4){
    //     nombre = productos4.nombre;
    //     precio = productos4.precio;
    // }
    // if (nombre.value == 5){
    //     nombre = productos5.nombre;
    //     precio = productos5.precio;
    // }

  
    for (let i = 0; i >= productos.length; i++)  {
        nombre = producto[i].nombre;
        precio = producto[i].precio;
        
    }
    
    console.log(nombre);
    console.log(precio);

    cantidadRemeras = document.getElementById("cantidad");
   

    console.log(cantidadRemeras.value);
    localStorage.setItem("cantidad", cantidadRemeras.value); 

    $("#mensaje").append(

        `Usted compró ${cantidadRemeras.value} ${nombre} por un total de $${precio*cantidadRemeras.value} `
    );
} )









