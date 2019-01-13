import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodocumentoMainComponent } from './tipodocumento-main.component';

describe('TipodocumentoMainComponent', () => {
  let component: TipodocumentoMainComponent;
  let fixture: ComponentFixture<TipodocumentoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipodocumentoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodocumentoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
