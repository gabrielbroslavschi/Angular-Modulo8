import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, Subject, catchError, empty } from 'rxjs';
import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true,
})
export class CursosListaComponent {
  // cursos!: Curso[];

  bsModalRef!: BsModalRef;

  cursos$!: Observable<Curso[]>;

  error$ = new Subject<boolean>();

  constructor(private service: CursosService, private modalService: BsModalService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.service.list().subscribe((dados:any) => {(this.cursos = dados)})
    this.onRefresh();
  }

  onRefresh(){
    this.cursos$ = this.service.list().pipe(
      catchError((error: any) => {
        // this.error$.next(true);
        this.handleError()
        return empty();
      })
    );

  }

  handleError(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger'
    this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.'
  }
}
