import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/model/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css'],
})
export class AddPacienteComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  genero: string = '';
  edad!: number;
  telefono: string = '';
  especialista: string = '';
  obraSocial: string = '';
  tieneTurno!: boolean;
  turno!: Date;

  constructor(private pacienteserv: PacienteService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const paciente = new Paciente(this.nombre, this.apellido, this.genero,
                                  this.edad, this.telefono, this.especialista,
                                  this.obraSocial, this.tieneTurno, this.turno);
    this.pacienteserv.save(paciente).subscribe({
     next: data =>{
      alert("Turno asignado exitosamente");
      this.router.navigate(['']);
     }, error: err =>{
      alert("Error al intentar asignar turno");
      this.router.navigate(['']);
     }
    })

  }
}
