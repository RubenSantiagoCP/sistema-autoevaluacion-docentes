import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecDocenteComponent } from './selec-docente.component';

describe('SelecDocenteComponent', () => {
  let component: SelecDocenteComponent;
  let fixture: ComponentFixture<SelecDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelecDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelecDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
