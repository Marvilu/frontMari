import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  URL = "http://localhost:8080/api/"

  constructor(private httpClient : HttpClient) { }

 //create
public save (paciente : Paciente): Observable<any>{
  return this.httpClient.post<any>(this.URL + 'crear', paciente);
}

 //read
//trae todos los libros
 public list(): Observable<Paciente[]> {
  return this.httpClient.get<Paciente[]>(this.URL + 'vertodos');
 }

 public detail(id: number): Observable<Paciente>{
  return this.httpClient.get<Paciente>(this.URL + `ver/${id}`);
 }

 //delete
 public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
 }

 //update
 public update(id: number, paciente: Paciente): Observable<any>{
  return this.httpClient.put<any>(this.URL + `editar/${id}`, paciente);
}



}
