import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css'],
  preserveWhitespaces: true,
})
export class CursosFormComponent {
  form!: FormGroup;
  subimitted = false;

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private modal: AlertModalService,
    private route: ActivatedRoute,
    private service: CursosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const id = params.id;
      const curso$ = this.service.loadById(id);
      curso$.subscribe((curso: any) =>{
        this.updateForm(curso)
      })
    });

    this.form = this.fb.group({
      id: [null],
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
    });
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  hasMinLength() {
    if (this.tamanhoString(this.form.value.nome) >= 4) {
      return false;
    }
    return true;
  }

  hasMaxLength() {
    if (this.tamanhoString(this.form.value.nome) <= 250) {
      return false;
    }
    return true;
  }

  tamanhoString(string: string) {
    return string !== null ? string.length : 0;
  }

  onSubmit() {
    this.subimitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      this.cursosService.create(this.form.value).subscribe(
        (success: any) => {
          this.modal.showAlertSucess('Curso Criado Com Sucesso!');
        },
        (error: any) => {
          this.modal.showAlertDanger('Erro ao Criar Curso!');
        },
        () => {
          console.log('request completo');
        }
      );
    }
  }

  onCancel() {
    this.subimitted = false;
    this.form.reset();
  }

  updateForm(curso: Curso){
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    })
  }
}
