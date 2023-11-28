import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarAutoComponent } from './realizar-auto.component';

describe('RealizarAutoComponent', () => {
  let component: RealizarAutoComponent;
  let fixture: ComponentFixture<RealizarAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealizarAutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealizarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
