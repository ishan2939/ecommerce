import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductordersComponent } from './productorders.component';

describe('ProductordersComponent', () => {
  let component: ProductordersComponent;
  let fixture: ComponentFixture<ProductordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
