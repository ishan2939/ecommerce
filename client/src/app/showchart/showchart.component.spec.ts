import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowchartComponent } from './showchart.component';

describe('ShowchartComponent', () => {
  let component: ShowchartComponent;
  let fixture: ComponentFixture<ShowchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
