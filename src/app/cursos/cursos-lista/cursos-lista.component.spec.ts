import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosListaComponent } from './cursos-lista.component';

describe('CursosListaComponent', () => {
  let component: CursosListaComponent;
  let fixture: ComponentFixture<CursosListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosListaComponent]
    });
    fixture = TestBed.createComponent(CursosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
