import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPropiedadComponent } from './tipo-propiedad.component';

describe('TipoPropiedadComponent', () => {
  let component: TipoPropiedadComponent;
  let fixture: ComponentFixture<TipoPropiedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPropiedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
