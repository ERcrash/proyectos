let nAlumnos = parseInt(prompt("Ingrese numero de alumos: "));
let nTareas = parseInt(prompt("Ingrese numero de tareas: "));
let nombres = [];
let tareas = [];
let id = 1;
function alumno(){
    nombres.push(prompt("Ingrese nombre: "));
    id++
}
for(let i = 0;i<nAlumnos;i++){
    alumno();
}
document.write(nombres);
document.write(id);