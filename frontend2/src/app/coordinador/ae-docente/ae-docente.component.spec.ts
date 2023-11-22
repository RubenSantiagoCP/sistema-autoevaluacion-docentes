import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeDocenteComponent } from './ae-docente.component';

describe('AeDocenteComponent', () => {
  let component: AeDocenteComponent;
  let fixture: ComponentFixture<AeDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AeDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AeDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
