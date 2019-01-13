import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialMainComponent } from './filial-main.component';

describe('FilialMainComponent', () => {
  let component: FilialMainComponent;
  let fixture: ComponentFixture<FilialMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
