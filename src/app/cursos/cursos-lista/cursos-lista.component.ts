import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, Subject, catchError, empty } from 'rxjs';
import { Component, ViewChild } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true,
})
export class CursosListaComponent {
  // cursos!: Curso[];

  // bsModalRef!: BsModalRef;

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  cursos$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  cursoSelecionado!: Curso;

  constructor(
    private service: CursosService,
    private modalService: BsModalService,
    private alertServices: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.service.list().subscribe((dados:any) => {(this.cursos = dados)})
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list().pipe(
      catchError((error: any) => {
        // this.error$.next(true);
        this.handleError('Erro ao carregar curos. Tente novamente mais tarde.');
        return empty();
      })
    );
  }

  handleError(string: string) {
    this.alertServices.showAlertDanger(string);
  }

  handleSuccess(string: string) {
    this.alertServices.showAlertSucess(string);
  }

  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(curso: Curso) {
    this.cursoSelecionado = curso;
    this.deleteModalRef = this.modalService.show(this.deleteModal);
  }

  onConfirmDelete() {
    this.service.delete(this.cursoSelecionado.id).subscribe(
      (success: any) => {
        this.onRefresh();
        this.deleteModalRef.hide();
        this.handleSuccess("Registro Excluio Com Sucesso!")
      },
      (error: any) => {
        this.handleError(
          'Erro ao excluir o curso. Tente novamente mais tarde.'
        );
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}
