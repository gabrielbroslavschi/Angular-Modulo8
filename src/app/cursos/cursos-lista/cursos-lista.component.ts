import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true
})
export class CursosListaComponent {

  // cursos!: Curso[];

  cursos$!: Observable<Curso[]>

  constructor(private service: CursosService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.service.list().subscribe((dados:any) => {(this.cursos = dados)})
    this.cursos$ = this.service.list();
  }

}
