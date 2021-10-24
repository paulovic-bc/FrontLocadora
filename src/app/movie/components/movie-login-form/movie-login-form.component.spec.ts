import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLoginFormComponent } from './movie-login-form.component';

describe('MovieLoginFormComponent', () => {
  let component: MovieLoginFormComponent;
  let fixture: ComponentFixture<MovieLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
