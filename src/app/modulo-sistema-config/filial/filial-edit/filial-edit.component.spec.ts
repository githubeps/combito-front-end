import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialEditComponent } from './filial-edit.component';

describe('FilialEditComponent', () => {
  let component: FilialEditComponent;
  let fixture: ComponentFixture<FilialEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
