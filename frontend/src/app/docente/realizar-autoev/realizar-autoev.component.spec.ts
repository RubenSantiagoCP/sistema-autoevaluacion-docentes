import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarAutoevComponent } from './realizar-autoev.component';

describe('RealizarAutoevComponent', () => {
  let component: RealizarAutoevComponent;
  let fixture: ComponentFixture<RealizarAutoevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealizarAutoevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealizarAutoevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
