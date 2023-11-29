import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './curso';
import { delay, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = "http://localhost:3000/cursos"

  constructor(private http: HttpClient) { }

  list(){
    // return this.http.get<Curso[]>(this.API).pipe(delay(2000))  //Exemplo com delay de 2segundos
    return this.http.get<Curso[]>(this.API)
  }

  loadById(id: number){
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  create(curso: Curso){
    return this.http.post(this.API, curso).pipe(take(1));
  }

  edit(id:number, curso: string){

  }
}
