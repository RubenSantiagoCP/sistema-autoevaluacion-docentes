import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarItemsComponent } from './revisar-items.component';

describe('RevisarItemsComponent', () => {
  let component: RevisarItemsComponent;
  let fixture: ComponentFixture<RevisarItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevisarItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RevisarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
