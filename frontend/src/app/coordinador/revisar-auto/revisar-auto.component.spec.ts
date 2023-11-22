import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarAutoComponent } from './revisar-auto.component';

describe('RevisarAutoComponent', () => {
  let component: RevisarAutoComponent;
  let fixture: ComponentFixture<RevisarAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevisarAutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RevisarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
