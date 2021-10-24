import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCadUsersFormComponent } from './movie-cad-users-form.component';

describe('MovieCadUsersFormComponent', () => {
  let component: MovieCadUsersFormComponent;
  let fixture: ComponentFixture<MovieCadUsersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCadUsersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCadUsersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
