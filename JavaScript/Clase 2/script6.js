


let num = 7 ;


if (num <= 10){

    alert("El numero es menor o igual 10")


}else{


    alert("El numero es mayor que 10")

}



if (num < 10){

    alert("El numero es menor  a  10")


}else if (num > 10){

    alert("El numero es mayor que 10")

} else {

    alert("El numero es igual que 10")

}




// version 1

/*
let respuesta = confirm ("Confirma que usted es mayor de edad ???");

if (respuesta == true){

    console.log("Puede pasar");


}else{
  
 

    let respuesta2 = confirm ("Tenes permiso de tus padres ??");
    if (respuesta2 == true){

        console.log("Puede pasar");


    }else {


            console.log("No podes pasar!!!")
    }

}

*/

let respuesta = confirm ("Confirma que usted es mayor de edad ???");

if (respuesta){

    console.log("Puede pasar");


}else{
    let respuesta2 = confirm ("Tenes permiso de tus padres ??");
   
    if (respuesta2){

        console.log("Puede pasar");


    }else {

            console.log("No podes pasar!!!")
    }

}



//voy a salir si:
// tengo plata y no llueve
// en caso de que sea feriado


let tengo_plata = false ;
let llueve  = true ;
let feriado  = true; 


if ((tengo_plata && !llueve) || feriado ){

    alert("Hoy se sale");

}else{

    alert("Hoy sale netflix");

}



const user_admin = "admin";
const user_pass= "ADMINISTRADOR1234";

let usuario = prompt("Ingrese su usuario");
let pass = prompt("Ingrese su contraseña");



if (user_admin === usuario && user_pass === pass){

    console.log("El usuario registrado es administrador");

    let resp= confirm("Queres cambiar el pass??");
    if (resp){

        let pass_nueva = prompt("Ingresa tu nueva contraseña");

        if (user_pass != pass_nueva){

            console.log("contraseña cambiada con exito");

        }else{

            alert("No podes utilizar la misma contraseña");

        }



    }


}else {

    let mensaje = "Ingresar correctamente los siguientes datos:";

    if (user_admin != usuario){

        mensaje += "\nUsuario";

    }

    if (user_pass != pass){
        mensaje += "\nContraseña";

    }

    alert(mensaje);

}
























