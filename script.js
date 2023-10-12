let diasHabiles = parseInt(prompt("Ingrese el número de días hábiles:"));

// Solicitar al usuario que ingrese los valores para el curso A
let cantAlFA = parseInt(prompt("Curso A: Ingrese la cantidad de alumnos femeninos:"));
let cantAlMA = parseInt(prompt("Curso A: Ingrese la cantidad de alumnos masculinos:"));
let inasFA = parseInt(prompt("Curso A: Ingrese la cantidad de inasistencias femeninas:"));
let inasMA = parseInt(prompt("Curso A: Ingrese la cantidad de inasistencias masculinas:"));

// Solicitar al usuario que ingrese los valores para el curso B
let cantAlFB = parseInt(prompt("Curso B: Ingrese la cantidad de alumnos femeninos:"));
let cantAlMB = parseInt(prompt("Curso B: Ingrese la cantidad de alumnos masculinos:"));
let inasFB = parseInt(prompt("Curso B: Ingrese la cantidad de inasistencias femeninas:"));
let inasMB = parseInt(prompt("Curso B: Ingrese la cantidad de inasistencias masculinas:"));

// Funciones 

function calcularInasistenciasTotales(inasF, inasM) {
  return inasF + inasM;
}

function calcularTotalAlumnos(cantAlF, cantAlM) {
  return cantAlF + cantAlM;
}

function calcularAsistenciaFemenina(diasHabiles, cantAlF, inasF) {
  return diasHabiles * cantAlF - inasF;
}

function calcularAsistenciaMasculina(diasHabiles, cantAlM, inasM) {
  return diasHabiles * cantAlM - inasM;
}

function calcularAsistenciaTotal(asisF, asisM) {
  return asisF + asisM;
}

function calcularAsistenciaFMedia(asisF, diasHabiles) {
  return asisF / diasHabiles;
}

function calcularAsistenciaMMedia(asisM, diasHabiles) {
  return asisM / diasHabiles;
}

function calcularAsistenciaMediaTotal(asisF, asisM, diasHabiles) {
  return (asisF + asisM) / (2 * diasHabiles);
}

function calcularAsistenciaPerfecta(totalAlumnos, diasHabiles) {
  return totalAlumnos * diasHabiles;
}

function calcularPorcentajeAsistencia(asisTotal, asistenciaPerfecta) {
  return (asisTotal / asistenciaPerfecta) * 100;
}

let continuar=true
// Menú de opciones
while (continuar) {
  console.log("Seleccione una opción:");
  console.log("1. Calcular asistencia para el Curso A");
  console.log("2. Calcular asistencia para el Curso B");
  console.log("3. Salir");

  let opcion = parseInt(prompt("Ingrese el número de la opción deseada:"));

  switch (opcion) {
    case 1:
      let asisFA = calcularAsistenciaFemenina(diasHabiles, cantAlFA, inasFA);
      let asisMA = calcularAsistenciaMasculina(diasHabiles, cantAlMA, inasMA);
      let asisTotalA = calcularAsistenciaTotal(asisFA, asisMA);
      let porcentajeAsistenciaA = calcularPorcentajeAsistencia(asisTotalA, calcularAsistenciaPerfecta(calcularTotalAlumnos(cantAlFA, cantAlMA), diasHabiles));

      console.log("Asistencia para el Curso A:");
      console.log("Asistencia Femenina: " + asisFA);
      console.log("Asistencia Masculina: " + asisMA);
      console.log("Asistencia Total: " + asisTotalA);
      console.log("Porcentaje de Asistencia: " + porcentajeAsistenciaA.toFixed(2) + "%");
      break;

    case 2:
      let asisFB = calcularAsistenciaFemenina(diasHabiles, cantAlFB, inasFB);
      let asisMB = calcularAsistenciaMasculina(diasHabiles, cantAlMB, inasMB);
      let asisTotalB = calcularAsistenciaTotal(asisFB, asisMB);
      let porcentajeAsistenciaB = calcularPorcentajeAsistencia(asisTotalB, calcularAsistenciaPerfecta(calcularTotalAlumnos(cantAlFB, cantAlMB), diasHabiles));

      console.log("Asistencia para el Curso B:");
      console.log("Asistencia Femenina: " + asisFB);
      console.log("Asistencia Masculina: " + asisMB);
      console.log("Asistencia Total: " + asisTotalB);
      console.log("Porcentaje de Asistencia: " + porcentajeAsistenciaB.toFixed(2) + "%");
      break;

    case 3:
      // Salir del programa
      console.log("¡Hasta luego!");
      continuar=false;
      break;
      

    default:
      console.log("Opción no válida. Por favor, ingrese una opción válida.");
  }
}
