
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
            else if (brownie.checked) {
                document.getElementById("rx9").innerHTML = "Su Helado con topings de: Oreo y brownie cuesta 80 MXN "
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

function beca(){
    let course = document.getElementById("ax101")
    let carrera = document.getElementById("ax102")
    let master = document.getElementById("ax103")
    let becaF = document.getElementById("ax104")
    let becaG = document.getElementById("ax105")
    let becaJ = document.getElementById("ax106")

    if(course.checked){
        if(becaF.checked){
            document.getElementById("rx10").innerHTML = "El costo de su programa es: $7,998.6 MXN"
        }
        else if(becaG.checked){
            document.getElementById("rx10").innerHTML = "El costo de su programa es: $8,498.3 MXN"
        }
        else if(becaJ.checked){
            document.getElementById("rx10").innerHTML = "El costo de su programa es: $4,999 MXN"
        }
        else{
            document.getElementById("rx10").innerHTML = "El costo de su programa es: $9,998 MXN"
        }
    }
    if(carrera.checked){
        if(becaF.checked){
            document.getElementById("rx10").innerHTML = "El costo de su programa es: $19,195.2 MXN"
        }
        else if(becaG.checked){
            document.getElementById("rx10").innerHTML = "El costo de su programa es: $20,394.9 MXN"
        }
        else if(becaJ.checked){
            document.getElementById("rx10").innerHTML = "El costo de su programa es: $11,997 MXN"
        }
        else{
            document.getElementById("rx10").innerHTML = "El costo de su programa es: $23,994 MXN"
        }
    }
    if(master.checked){
        if(becaF.checked){
            document.getElementById("rx10").innerHTML = "El costo de su programa es: $28,790.4 MXN"
        }
        else if(becaG.checked){
            document.getElementById("rx10").innerHTML = "El costo de su programa es: $30,589.8 MXN"
        }
        else if(becaJ.checked){
            document.getElementById("rx10").innerHTML = "El costo de su programa es: $17,994 MXN"
        }
        else{
            document.getElementById("rx10").innerHTML = "El costo de su programa es: $35,988 MXN"
        }
    }

}

function consumoLitros(){
    let coche = document.getElementById("ax111")
    let moto = document.getElementById("ax112")
    let autobus = document.getElementById("ax113")
    let km = parseInt(document.getElementById("ax114").value)
    const coche_precio = 0.20
    const moto_precio = 0.10
    const autobus_precio = 0.50

    if (coche.checked){
        if(km <= 100){
            let costo = coche_precio*km + 5
            document.getElementById("rx11").innerHTML = "El total a pagar es: "+ costo
        }
        else{
            let costo = coche_precio*km + 10
            document.getElementById("rx11").innerHTML = "El total a pagar es: "+ costo
        }
    }
    else if (moto.checked){
        if(km <= 100){
            let costo = moto_precio*km + 5
            document.getElementById("rx11").innerHTML = "El total a pagar es: "+ costo
        }
        else{
            let costo = moto_precio*km + 10
            document.getElementById("rx11").innerHTML = "El total a pagar es: "+ costo
        }
    }
    else if (autobus.checked){
        if(km <= 100){
            let costo = autobus_precio*km + 5
            document.getElementById("rx11").innerHTML = "El total a pagar es: "+ costo
        }
        else{
            let costo = autobus_precio*km + 10
            document.getElementById("rx11").innerHTML = "El total a pagar es: "+ costo
        }
    }
    else{
        document.getElementById("rx11").innerHTML = "Porfavor elija un coche"
    }


}