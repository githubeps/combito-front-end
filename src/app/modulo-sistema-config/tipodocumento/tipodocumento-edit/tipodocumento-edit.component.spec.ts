import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodocumentoEditComponent } from './tipodocumento-edit.component';

describe('TipodocumentoEditComponent', () => {
  let component: TipodocumentoEditComponent;
  let fixture: ComponentFixture<TipodocumentoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipodocumentoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodocumentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
