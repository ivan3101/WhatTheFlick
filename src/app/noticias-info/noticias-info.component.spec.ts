import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasInfoComponent } from './noticias-info.component';

describe('NoticiasInfoComponent', () => {
  let component: NoticiasInfoComponent;
  let fixture: ComponentFixture<NoticiasInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
