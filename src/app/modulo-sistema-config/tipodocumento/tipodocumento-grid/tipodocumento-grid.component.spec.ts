import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodocumentoGridComponent } from './tipodocumento-grid.component';

describe('TipodocumentoGridComponent', () => {
  let component: TipodocumentoGridComponent;
  let fixture: ComponentFixture<TipodocumentoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipodocumentoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodocumentoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
