let nombre = prompt("¿Cuál es su nombre?");

alert("Hola " + nombre);
console.log("Hola " + nombre);

let edad = prompt("¿Y qué edad tienes?");

alert("Entiendo, tu nombre es " + nombre + " Y tienes " + edad + " años.");
console.log("Entiendo, tu nombre es " + nombre + " Y tienes " + edad + " años.");

let answer = confirm("Confirmar información");

if (answer) {
    alert("Información confirmada");
} 
else {
    alert("Error");
}

confirm("¿Sabes cuántos años tendrás en 2030?");

let nuevaEdad = parseInt(edad) + 10;

alert(nuevaEdad);