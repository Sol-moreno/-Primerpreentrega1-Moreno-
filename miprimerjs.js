alert("Bienvenidos a la calculadora de promedios")
const usuarioAutorizado = "alumno"
const contraseniaAutorizada = "1234"

let usuario = prompt(" ingrese su usuario")
let contrasenia = prompt("ingrese su contrasenia")

if (usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
    alert("bienvenido " + usuario)

    let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"))

    for (let i = 0; i < cantidadAlumnos; i++) {
        let nombreAlumno = prompt("ingrese nombre del alumno ")
        let primeraNota = parseInt(prompt(" Ingrese la primera nota "))
        let segundaNota = parseInt(prompt(" Ingrese la segunda nota "))
        let terceraNota = parseInt(prompt(" Ingrese la tercera nota "))
        let promedio = calcularPromedio(primeraNota, segundaNota, terceraNota)

        alert("promedio de " + nombreAlumno + " es " + promedio.toFixed(2))

        let aprueba = apruebaAnio(promedio)

        if (aprueba) {
            alert(nombreAlumno + " Aprueba el año ")
        } else {
        alert(nombreAlumno + " No aprueba el anio ")
        }
    }
} else {
    alert("Usuario o contrasenia incorrecta")
}

function calcularPromedio(primeraNota, segundaNota, terceraNota) {
    let promedio = (primeraNota + segundaNota + terceraNota) / 3

    return promedio
}



function apruebaAnio(promedio) {

    if (promedio >= 6) {
        return true


    } else {
        return false
    }
}