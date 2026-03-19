type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
  id: 3,
  nombre: "Junior",
  apellidos: "Doe",
  sexo: "Male",
  temperatura: 36.8,
  frecuenciaCardiaca: 90,
  especialidad: "Pediatra",
  edad: 8,
},
];
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const resultado: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      resultado.push(pacientes[i]);
    }
  }

  return resultado;
};
console.log(obtenPacientesAsignadosAPediatria(pacientes));
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const resultado: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].especialidad === "Pediatra" &&
      pacientes[i].edad < 10
    ) {
      resultado.push(pacientes[i]);
    }
  }

  return resultado;
};
console.log(obtenPacientesAsignadosAPediatria(pacientes));

console.log(
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProtocolo = true;
    }
  }

  return activarProtocolo;
};
console.log("¿Protocolo de urgencia?", activarProtocoloUrgencia(pacientes));
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const resultado: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      resultado.push({
        ...pacientes[i],
        especialidad: "Medico de familia",
      });
    } else {
      resultado.push(pacientes[i]);
    }
  }

  return resultado;
};
console.log(
  "Reasignados:",
  reasignaPacientesAMedicoFamilia(pacientes)
);
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientes = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      hayPacientes = true;
    }
  }

  return hayPacientes;
};
console.log(
  "¿Hay pacientes de pediatría?",
  HayPacientesDePediatria(pacientes)
);
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const resultado: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      resultado.medicoDeFamilia++;
    }

    if (pacientes[i].especialidad === "Pediatra") {
      resultado.pediatria++;
    }

    if (pacientes[i].especialidad === "Cardiólogo") {
      resultado.cardiologia++;
    }
  }

  return resultado;
};
console.log(
  "Conteo por especialidad:",
  cuentaPacientesPorEspecialidad(pacientes)
);