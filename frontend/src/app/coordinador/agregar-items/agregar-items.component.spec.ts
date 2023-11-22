import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarItemsComponent } from './agregar-items.component';

describe('AgregarItemsComponent', () => {
  let component: AgregarItemsComponent;
  let fixture: ComponentFixture<AgregarItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
