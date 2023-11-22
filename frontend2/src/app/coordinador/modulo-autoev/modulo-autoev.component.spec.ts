import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloAutoevComponent } from './modulo-autoev.component';

describe('ModuloAutoevComponent', () => {
  let component: ModuloAutoevComponent;
  let fixture: ComponentFixture<ModuloAutoevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuloAutoevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuloAutoevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
