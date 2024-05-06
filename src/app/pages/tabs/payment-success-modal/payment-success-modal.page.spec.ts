import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentSuccessModalPage } from './payment-success-modal.page';

describe('PaymentSuccessModalPage', () => {
  let component: PaymentSuccessModalPage;
  let fixture: ComponentFixture<PaymentSuccessModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSuccessModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
