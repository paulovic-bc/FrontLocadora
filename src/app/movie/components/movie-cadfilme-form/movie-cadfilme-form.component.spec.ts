import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCadfilmeFormComponent } from './movie-cadfilme-form.component';

describe('MovieCadfilmeFormComponent', () => {
  let component: MovieCadfilmeFormComponent;
  let fixture: ComponentFixture<MovieCadfilmeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCadfilmeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCadfilmeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
