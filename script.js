
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
  console.log("1. Calcular asistencia para el Curso ");
  console.log("2. Salir");

  let opcion = parseInt(prompt("Ingrese el número de la opción deseada:"));

  switch (opcion) {
    case 1:
      let diasHabiles = parseInt(prompt("Ingrese el número de días hábiles:"));
      let cantAlFB = parseInt(prompt("Curso B: Ingrese la cantidad de alumnos femeninos:"));
      let cantAlMB = parseInt(prompt("Curso B: Ingrese la cantidad de alumnos masculinos:"));
      let inasFB = parseInt(prompt("Curso B: Ingrese la cantidad de inasistencias femeninas:"));
      let inasMB = parseInt(prompt("Curso B: Ingrese la cantidad de inasistencias masculinas:"));

      let asisF = calcularAsistenciaFemenina(diasHabiles, cantAlF, inasF);
      let asisM = calcularAsistenciaMasculina(diasHabiles, cantAlM, inasM);
      let asisTotal = calcularAsistenciaTotal(asisF, asis);
      let porcentajeAsistencia = calcularPorcentajeAsistencia(asisTotal, calcularAsistenciaPerfecta(calcularTotalAlumnos(cantAlF, cantAlM), diasHabiles));

      console.log("Asistencia para el Curso A:");
      console.log("Asistencia Femenina: " + asisF);
      console.log("Asistencia Masculina: " + asisM);
      console.log("Asistencia Total: " + asisTotal);
      console.log("Porcentaje de Asistencia: " + porcentajeAsistencia.toFixed(2) + "%");
      break;

    case 2:
      // Salir del programa
      console.log("¡Hasta luego!");
      continuar=false;
      break;
      

    default:
      console.log("Opción no válida. Por favor, ingrese una opción válida.");
  }
}
