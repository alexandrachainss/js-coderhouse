


//variables que almacenan mis datos personales
let nombre = "Nicolas" ;

//variable que utilizo para guardar mi apellido
let apellido = "Martini" ;
let edad = 32 ;

let misDatos = nombre + " " + apellido + " - " + edad + " años " ;

console.log(misDatos);


alert("Mis datos personales son: "+ misDatos);




let entrada = prompt("Ingresar una letra");
let salida  = entrada + " " + "ingresada";
alert(salida);



let respuesta = confirm ("Confirma que es mayor de edad ??");

if (respuesta){

    alert("Te dejo acceder");

}else {
    alert("No podes pasar");

}


let numero_decimal = prompt("Ingrese un dial de radio");

console.log(typeof numero_decimal);

console.log(typeof parseFloat(numero_decimal));

