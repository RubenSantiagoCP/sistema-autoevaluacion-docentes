import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesPeriodoComponent } from './ges.periodo.component';

describe('GesPeriodoComponent', () => {
  let component: GesPeriodoComponent;
  let fixture: ComponentFixture<GesPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GesPeriodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GesPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
