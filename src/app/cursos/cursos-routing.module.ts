import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursoResolveGuard } from './guards/curso-resolver.guard';

const routes: Routes = [
  { path: '', component: CursosListaComponent },
  {
    path: 'novo',
    component: CursosFormComponent,
    resolve: {
      curso: CursoResolveGuard,
    },
  },
  {
    path: 'editar/:id',
    component: CursosFormComponent,
    resolve: {
      curso: CursoResolveGuard,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
