export class Paciente {
    id?: number;
    nombre: string;
    apellido: string;
    genero: string;
    edad: number;
    telefono: string;
    especialista: string;
    obraSocial: string;
    tieneTurno: boolean;
    turno: Date;

    constructor(nombre: string, apellido: string, genero: string, edad: number,
        telefono: string, especialista: string, obraSocial: string, tieneTurno: boolean, turno: Date) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.genero = genero;
        this.edad = edad;
        this.telefono = telefono;
        this.especialista = especialista;
        this.obraSocial = obraSocial;
        this.tieneTurno = tieneTurno;
        this.turno = turno;

    }
}


