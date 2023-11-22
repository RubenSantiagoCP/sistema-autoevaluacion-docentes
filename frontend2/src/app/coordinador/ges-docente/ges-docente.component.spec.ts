import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesDocenteComponent } from './ges-docente.component';

describe('GesDocenteComponent', () => {
  let component: GesDocenteComponent;
  let fixture: ComponentFixture<GesDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GesDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GesDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
