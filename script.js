function bello(){
    var respuesta = document.getElementById("x1").value;
    if (respuesta ==="si"){
        document.getElementsByClassName("rx1").innerHTML = "ciertamente"
    }
    else if (respuesta === "no"){
        document.getElementsByClassName("rx1").innerHTML = "no te creo"
    }
}

console.log("Hola mundo")

let numero = document.getElementById("x2").value;

function division(a){
    if(a%2=== 0){
        document.getElementsByClassName("rx2").innerHTML = "Su numero es divisible por 2"
    }

   else  if(a%2 !== 0){
        document.getElementsByClassName("rx2").innerHTML = "Su numero no es divisible por 2"
    }
}

division(numero);