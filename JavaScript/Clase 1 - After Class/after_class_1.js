const anio_actual = 2022 ;


let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

//Pido el dato al usuario y lo convierto a entero
let anio_nac= parseInt(prompt("Ingrese su año de nacimiento"));

//chequeo si no es un numero (NAN)
if (isNaN(anio_nac)) {

	
	alert ("No ingersaste un numero en anio de nacimiento");

}else{
	//Calculo la diferencia entre el anio actual y el año de nacimiento
	let edad = anio_actual - anio_nac ;

	//armo el mensaje para mostrar en el confirm
	// \n se utiliza para hacer un salto de linea
	let mensaje = "Confirma que los datos ingresados son correctos ? ";
	
	//con (+=) se agrega texto a lo que ya tenia la variable mensaje
	mensaje += "\n" + "nombre: " + nombre ;

	//otra forma de  agregar texto a lo que ya tenia la variable mensaje
	mensaje = mensaje +  "\n" + "apellido: " + apellido ;

	mensaje += "\n" + "edad: " + edad ;

	let respuesta = confirm(mensaje);
	
	//si respondio que si entonces muestro mensaje de que se guardo exitosamente los datos
	if (respuesta){
		alert("Sus datos se guardaron exitosamente");
	}else{
		alert("Vuelva a ingresar los datos");
	}
	
	
}







