import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManagementComponentComponent } from './order-management-component.component';

describe('OrderManagementComponentComponent', () => {
  let component: OrderManagementComponentComponent;
  let fixture: ComponentFixture<OrderManagementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderManagementComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
