import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmyproductsComponent } from './showmyproducts.component';

describe('ShowmyproductsComponent', () => {
  let component: ShowmyproductsComponent;
  let fixture: ComponentFixture<ShowmyproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmyproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmyproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
