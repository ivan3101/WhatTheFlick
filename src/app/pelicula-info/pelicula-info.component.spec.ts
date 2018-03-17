import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaInfoComponent } from './pelicula-info.component';

describe('PeliculaInfoComponent', () => {
  let component: PeliculaInfoComponent;
  let fixture: ComponentFixture<PeliculaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
