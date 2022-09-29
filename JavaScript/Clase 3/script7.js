 

 let contador = 0 ;

for (let i = 1 ;i<= 21 ; i ++){
   

    if (i % 2 != 0) {


        contador  +=  i ;

        if (i == 1){

            console.log("Tengo "+i+" oveja");
        }else {
    
            console.log("Tengo "+i+" ovejas");
    
        }


    }else{


        continue ;

    }
}


alert("La suma total de ovejas impares es "+contador);






 
for (let i = 1 ;i<= 21 ; i ++){

    
    if (i % 2 == 0) {

        continue ;


    }else{

        if (i == 1){

            console.log("Tengo "+i+" oveja");
        }else {
    
            console.log("Tengo "+i+" ovejas");
    
        }
        

    }



    



}






//calculadora


let respuesta = true;

do {

    
    let num1 = parseInt(prompt("Ingrese un numero"));
    let operacion = prompt ("Ingrese la operacion que quiere realizar");
    let num2 = parseInt(prompt("Ingrese otro numero"));

    switch (operacion){


        case  "+" : alert("La suma de " + num1 + " + "  + num2 + " es igual a "+ (num1+num2)) ;
                    break;

        case  "-" : alert("La resta de " + num1 + " - "  + num2 + " es igual a "+ (num1-num2)) ;
                    break;
        
        case  "*" : alert("La multiplicacion de " + num1 + " x "  + num2 + " es igual a "+ (num1*num2)) ;
                    break;    
        
        case  "/" : alert("La division de " + num1 + " / "  + num2 + " es igual a "+ (num1/num2)) ;
                    break;  
        default :
        
                    alert("Operacion no valida");

    }

    respuesta = confirm("Desea hacer otro calculo");

}while(respuesta)






/* comparacion  if else swich

    if (operacion ===  "+" ) {
        
        alert("La suma de " + num1 + " + "  + num2 + " es igual a "+ (num1+num2)) 

    }else if (operacion === "-") {
        
        alert("La resta de " + num1 + " - "  + num2 + " es igual a "+ (num1-num2)) ;
    }
    
    else if (operacion === "*"  ){
        
        alert("La multiplicacion de " + num1 + " x "  + num2 + " es igual a "+ (num1*num2)) ;
    }
    
    else if (operacion === "/"  ){
        
        alert("La division de " + num1 + " / "  + num2 + " es igual a "+ (num1/num2)) ;
    } else {           
  
    
        alert("Operacion no valida");
    }


*/




 //datos del usuario con los que comparar input
let user = "usuario";
let password = "pass123";

//pedido de input al usuario hasta que ingrese datos correctos
do {
	let userInput = prompt("Ingrese usuario");
	let passwordInput = prompt("Ingrese password");

} while (!(userInput == user && passwordInput == password));

//mensaje bienvenida tras ingreso de datos correctos
alert("Bienvenido " + user);   





