import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstudiosComponent } from './add-estudios.component';

describe('AddEstudiosComponent', () => {
  let component: AddEstudiosComponent;
  let fixture: ComponentFixture<AddEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEstudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
