import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproductdetailsComponent } from './myproductdetails.component';

describe('MyproductdetailsComponent', () => {
  let component: MyproductdetailsComponent;
  let fixture: ComponentFixture<MyproductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyproductdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
