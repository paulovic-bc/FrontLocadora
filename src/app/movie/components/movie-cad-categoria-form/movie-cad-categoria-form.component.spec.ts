import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCadCategoriaFormComponent } from './movie-cad-categoria-form.component';

describe('MovieCadCategoriaFormComponent', () => {
  let component: MovieCadCategoriaFormComponent;
  let fixture: ComponentFixture<MovieCadCategoriaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCadCategoriaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCadCategoriaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
