var nota1 = document.getElementById("index_nota1");
var nota2 = document.getElementById("index_nota2");
var nota3 = document.getElementById("index_nota3");

var boton = document.getElementById("boton");

boton.addEventListener("click", promedio);

function promedio() {
    //let promedio = ((nota1.value) + (nota2.value) + (nota3.value)) / 3;

    var p = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value)) / 3;
    alert("Su promedio es: " + p);

    //alert(nota1.value + nota2.value + nota3.value + "El promedio es: " + p);
}

function prueba() {
    alert("Cualquier cosa");
}

//boton.addEventListener("click", promedio);




// no se puede modificar
var // 
let // si se modifica en una función no se modifica la global