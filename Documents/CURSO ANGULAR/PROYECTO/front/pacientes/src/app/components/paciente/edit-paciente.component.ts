import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/model/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit {
   paciente: Paciente = null;
  constructor(private pacienteservice: PacienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id'];
    this.pacienteservice.detail(id).subscribe({
      next: data =>{
        alert("¿Está seguro que desea modificar el turno?");
        this.paciente= data;
      }, error: err => {
        alert("Error al seleccionar turno.");
        this.router.navigate(['']);
      }
    })
  }

  onUpdate(): void {
    if(confirm("¿Desea editar este turno?")){
    const id= this.activatedRoute.snapshot.params['id'];
    this.pacienteservice.update(id, this.paciente).subscribe({
      next: data =>{
        alert("Turno modificado correctamente.");
        this.router.navigate(['']);
      }, error: err=> {
        alert("Error al modificar turno.");
        this.router.navigate(['']);

      }
    })
  }
  }

}
