
function bello(){
    var respuesta = document.getElementById("x1").value;
    if (respuesta ==="si"){
        let cambio = document.getElementById("rx1")
        cambio.innerHTML = "ciertamente"
    }
    else if (respuesta === "no"){
        document.getElementById("rx1").innerHTML = "no te creo"
    }
};

function division(){
    var numero = document.getElementById("x2").value;
    let convertido = parseInt(numero)
    if(convertido%2=== 0){
        document.getElementById("rx2").innerHTML = "Su numero "+convertido + " es divisible por 2"
    }
    else  if(convertido%2 !== 0){
        document.getElementById("rx2").innerHTML = "Su numero "+convertido + " no es divisible por 2"
    }
};

function alerta(){
    alert("su numero es par")
}

function premio(){
    var numero = document.getElementById("x4").value;
    let convertido = parseInt(numero)
    if(convertido === 1000){
        document.getElementById("rx4").innerHTML = "Ganaste un premio"
    }
    else  if(convertido !== 1000){
        document.getElementById("rx4").innerHTML = "Losentimos sigue participando"
    }
};

function calcular(){
    let a = parseInt(document.getElementById("ax5").value)
    let b = parseInt(document.getElementById("bx5").value)
    if(a<b){
        document.getElementById("rx5").innerHTML = a + " es menor que "+b
    }
    else if(b<a){
        document.getElementById("rx5").innerHTML = b + " es menor que "+a
    }
};

function calcular2(){
    let a = parseInt(document.getElementById("ax6").value)
    let b = parseInt(document.getElementById("bx6").value)
    if(a<b){
        document.getElementById("rx6").innerHTML = a + " es menor que "+b
    }
    else if(b<a){
        document.getElementById("rx6").innerHTML = b + " es menor que "+a
    }
    else{
        document.getElementById("rx6").innerHTML = a + " es igual "+b
    }
};

function whichDay(){
    let day = document.getElementById("ax7").value
    let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
    if (dias.includes(day) === true){
        if (day === "lunes"){
        document.getElementById("rx7").innerHTML = "Ten un Excelente inicio de semana"
        }
        else if (day === "viernes"){
            document.getElementById("rx7").innerHTML = "Uff.. Alfin viernes"
        }
        else if (day === "sabado" || day === "domingo"){
            document.getElementById("rx7").innerHTML = "Descansa es fin de semana"
        }
        else{
            document.getElementById("rx7").innerHTML = "Ten un buen dia"
        }
    }
    else {
        document.getElementById("rx7").innerHTML = "Usted no ingreso un dia valido"
    }
};

function calificacion(){
    let nota = parseInt(document.getElementById("ax8").value)
    let notas = [1,2,3,4,5,6,7,8,9,10]
    if (notas.includes(nota) === true){
        if (nota < 6 ){
            document.getElementById("rx8").innerHTML = "Reprobado"
        }
        else if (6 <= nota && nota <= 8 ){
            document.getElementById("rx8").innerHTML = "Regular"
        }
        else if (nota === 9){
            document.getElementById("rx8").innerHTML = "Bien"
        }
        else if (nota === 10){
            document.getElementById("rx8").innerHTML = "Excelente"
        }
    }
    else {
        document.getElementById("rx8").innerHTML = "Usted no ingreso una calificacion valida"
    }

}

function eleccion(){
    let helado = document.getElementById("ax91")
    let oreo = document.getElementById("ax92")
    let Kitkat = document.getElementById("ax93")
    let brownie = document.getElementById("ax94")
    if (helado.checked){
        if (oreo.checked){
            if (Kitkat.checked){
                if (brownie.checked){
                    document.getElementById("rx9").innerHTML = "Su Helado con topings de: Oreo, KitKat y brownie, cuesta 95 MXN "
                }
                else{
                    document.getElementById("rx9").innerHTML = "Su Helado con topings de: Oreo y KitKat, cuesta 75 MXN "
                }
            }
            else {
                document.getElementById("rx9").innerHTML = "Su Helado con toping de: Oreo, cuesta 60 MXN "
            }
        }
        else if (Kitkat.checked){
            if (brownie.checked){
                document.getElementById("rx9").innerHTML = "Su Helado con topings de: KitKat y brownie, cuesta 85 MXN "
            }
            else{
                document.getElementById("rx9").innerHTML = "Su Helado con toping de KitKat, cuesta 65 MXN "
            }
        }
        else if (brownie.checked){
            document.getElementById("rx9").innerHTML = "Su Helado con toping de brownie, cuesta 70 MXN "
        }
        else{
            document.getElementById("rx9").innerHTML = "Su Helado cuesta 50 MXN"
        }
    }
    else{
        document.getElementById("rx9").innerHTML = "Por favor elija helado para agregar topings"
    }
}