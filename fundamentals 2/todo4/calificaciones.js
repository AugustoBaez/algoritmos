function calificaciones(num) {

    let notas = ['A', 'B', 'C', 'D', 'F']

    if (num >= 90) {
        console.log("Puntuacion:", num, "Calificacion:", notas[0])
    }
    else if (num >= 80 && num < 90) {
        console.log("Puntuacion:", num, "Calificacion:", notas[1])
    }
    else if (num >= 70 && num < 80) {
        console.log("Puntuacion:", num, "Calificacion:", notas[2])
    }
    else if (num >= 60 && num < 70) {
        console.log("Puntuacion:", num, "Calificacion:", notas[3])
    }
    else {
        console.log("Puntuacion:", num, "Calificacion:", notas[4])
    }
}
calificaciones(50)