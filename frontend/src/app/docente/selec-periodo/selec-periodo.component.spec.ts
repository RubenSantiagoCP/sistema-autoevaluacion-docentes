import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecPeriodoComponent } from './selec-periodo.component';

describe('SelecPeriodoComponent', () => {
  let component: SelecPeriodoComponent;
  let fixture: ComponentFixture<SelecPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelecPeriodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelecPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
