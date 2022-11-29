import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/model/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  pacientes: Paciente[] = [];

  constructor(private pacienteservicio: PacienteService) { }

  ngOnInit(): void {
    this.cargarPacientes();
  }

  cargarPacientes(): void {
    this.pacienteservicio.list().subscribe(data => {this.pacientes=data; })

  }

  borrar(id?: number):void{
    if(confirm("¿Desea eliminar este turno?")){
      if (id!= undefined){
        this.pacienteservicio.delete(id).subscribe({
          next: data => {
            alert ("Turno eliminado Exitosamente");
            this.cargarPacientes();
          },error: err => {
            alert("Error al eliminar Turno");
          }
      })
      }
    }
  }





}
