
$(document).ready(()=>{


    for (let i = 0 ;i< arregloRemera.length ;i++){

        let objetoRemera = arregloRemera[i];

        let nombre = objetoRemera.getNombre();
        let precio = objetoRemera.getPrecio();
        let imagen = objetoRemera.getImagen();
       
        
        $("#selectorRemeras").append (

           `<option class="opcionesRemeras" id="remera${objetoRemera.id}" value="${objetoRemera.id}">${objetoRemera.nombre} ($${objetoRemera.precio})</option>
            `    
        )
        
        $(`#remera${[objetoRemera.id]}`).click( (e) => {

            $(".form__cnt__1").empty();   
            $(".form__cnt__1").append(`<image src = "..${objetoRemera.imagen}"></image>`);
        
        });
        

        // $(`#remera${[objetoRemera.id]}`).hover(function(){
        //     $(".form__cnt__1").append(`<image src = "..${objetoRemera.imagen}"></image>`);
        // }, function(){
        //     $(".form__cnt__1").empty();
        // })
        
    }
 


    $("#formCarrito").submit(function (e) {

        $("#mensaje").empty();

        e.preventDefault();


        let nombre = parseInt($("#selectorRemeras").val());
        let cantidad = parseInt($("#cantidad").val());
        let subTotal = 0;
        let descuento = 0;
        let envio = 0;
        let total = 0;
        
        for (let i = 0 ;i< arregloRemera.length ;i++){

            let objetoRemera = arregloRemera[i];

            if (nombre == [i+1]){
                nombre = objetoRemera.getNombre();
                precio = objetoRemera.getPrecio();
                imagen = objetoRemera.getImagen();
                cantidad = objetoRemera.setCantidad(cantidad);
                subTotal= objetoRemera.calcularSubTotal();
                descuento = objetoRemera.calcularDescuento();
                envio = objetoRemera.calcularEnvio();
                total = objetoRemera.calcularTotal();
            }
        }
        
        
    
        $("#mensaje").append(
    
            `<p> ♦ Usted compró ${cantidad} unidades de ${nombre} por un Subtotal de $${subTotal}.<p>
             <p> ♦ Descuento 10% OFF (Llevando dos o más remeras): $${descuento}<p>
             <p> ♦ IVA 21%: $${(subTotal)*0.21}<p>
             <p> ♦ Valor del Envio: $${envio}<p>
             <p> ♦ Total $${total}<p>
            `

        );

      

    } )

    

})