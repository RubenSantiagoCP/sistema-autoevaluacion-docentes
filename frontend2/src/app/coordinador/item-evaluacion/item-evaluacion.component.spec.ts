import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEvaluacionComponent } from './item-evaluacion.component';

describe('ItemEvaluacionComponent', () => {
  let component: ItemEvaluacionComponent;
  let fixture: ComponentFixture<ItemEvaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemEvaluacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
