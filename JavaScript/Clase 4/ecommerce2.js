

const user = "comprador";
const pass_comprador = "pass1234";


function  solicitarDatos(){

    let usuario = prompt("Ingrese su usuario");
    let pass = prompt ("Ingrese su contraseña");


    if (validarDatos (usuario,pass)){

        iniciarCarrito();


    }else{


        alert("Usuario y/0 contraseña invalida");



    }




}



function validarDatos(usuario,pass){


    if (usuario ===  user && pass === pass_comprador ){


        return true ;

    }else {


        return false ;

    }





}


function iniciarCarrito(){


    let lista = "" ;

    let finalizar_carrito = false ;


    while (!finalizar_carrito){


        let cod = prompt("Ingrese codigo de producto");
        let producto = obtenerProducto(cod);


        if (producto){

            console.log("producto agregado con exito :"+producto);
            lista += "\n"+producto;


        }else{

            if (cod === null){

                finalizar_carrito = true ;


            }else {


                alert("Ingrese un codigo de producto valido");
            
            }

        }

    }

    if (lista != ""){

        let resp = confirm ("Desea concretar la compra de :"+lista);
        if (resp){

            alert("Gracias por comprar en nuestra tienda online");


        }


    }








}




function obtenerProducto(cod){ 


    let producto  ;
    switch(cod){

        case "1" : 
                    producto = "Carne";
                    break;
        case "2" : 
                    producto = "Pollo";
                    break;
        case "3" : 
                    producto = "Zapallo" ;
                    break;
        case "4" : 
                    producto = "Detergente"
                    break;       
        case "5" : 
                    producto = "Jabon de Tocador" ;
                    break;

         default :
                    producto = false;           

    }


   return producto ;  



}



// cuadno esta todo cargado se le pide datos al usuario
document.addEventListener('DOMContentLoaded', function() {
    solicitarDatos();

});



