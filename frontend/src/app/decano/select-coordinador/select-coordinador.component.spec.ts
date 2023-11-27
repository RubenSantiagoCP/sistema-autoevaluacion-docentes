import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCoordinadorComponent } from './select-coordinador.component';

describe('SelectCoordinadorComponent', () => {
  let component: SelectCoordinadorComponent;
  let fixture: ComponentFixture<SelectCoordinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectCoordinadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
