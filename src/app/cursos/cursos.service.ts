import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './curso';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = "http://localhost:3000/cursos"

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Curso[]>(this.API).pipe(delay(2000))
  }
}
