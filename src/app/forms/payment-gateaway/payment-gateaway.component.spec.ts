import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGateawayComponent } from './payment-gateaway.component';

describe('PaymentGateawayComponent', () => {
  let component: PaymentGateawayComponent;
  let fixture: ComponentFixture<PaymentGateawayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentGateawayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentGateawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
