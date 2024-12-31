import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  currentUser: any;
  currentStep = 1;
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCode: string;
  cartData: any;
  products: any;
  loading = false;
  successMessage = '';
  orderId: string;
  qrCodeUrl = '../../assets/qr.png'; // Đường dẫn đến QR code mặc định hoặc được tạo động

  constructor(private _auth: AuthService, private _cart: CartService) {
    this._auth.user.subscribe((user) => {
      if (user) {
        console.log(user);
        this.currentUser = user;
        this.billingAddress[0].value = user.fname;
        this.billingAddress[1].value = user.email;
      }
    });

    this._cart.cartDataObs$.subscribe((cartData) => {
      this.cartData = cartData;
    });
  }

  ngOnInit(): void {}

  goToThankYouPage(): void {
    this.loading = true;
    setTimeout(() => {
      this.submitCheckout();
    }, 750); 
  }

  submitCheckout() {
    this.loading = true;
    setTimeout(() => {
      this._cart.submitCheckout(this.currentUser.id, this.cartData).subscribe(
        (res: any) => {
          console.log(res);
          this.loading = false;
          this.orderId = res.orderId;
          this.products = res.products;
          this.currentStep = 4; // Chuyển đến trang cảm ơn
          this._cart.clearCart();
        },
        (err) => {
          console.log(err);
          this.loading = false;
        }
      );
    }, 750);
  }

  getProgressPrecent() {
    return (this.currentStep / 4) * 100;
  }

  submitBilling(): void {
    this.nextStep();
  }

  canBillingSubmit(): boolean {
    return (
      this.billingAddress.filter((field) => field.value.length > 0).length !== 7
    );
  }

  submitPayment(): void {
    this.nextStep();
  }

  canPaymentSubmit(): boolean {
    return this.cardNumber && this.cardName && this.cardExpiry && this.cardCode
      ? true
      : false;
  }

  nextStep(): void {
    this.currentStep += 1;
    localStorage.setItem('checkoutStep', this.currentStep.toString());
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep -= 1;
      localStorage.setItem('checkoutStep', this.currentStep.toString());
    }
  }

  billingAddress = [
    {
      name: 'Họ và tên',
      placeholder: 'Nhập tên đầy đủ của bạn',
      type: 'text',
      value: '',
    },
    {
      name: 'Email',
      placeholder: 'Nhập địa chỉ email của bạn',
      type: 'email',
      value: '',
    },
    {
      name: '2nd E-mail',
      placeholder: 'Nhập địa chỉ email của bạn',
      type: 'email',
      value: '',
    },
    {
      name: 'Điện thoại',
      placeholder: 'Nhập số điện thoại của bạn',
      type: 'text',
      value: '',
    },
  ];
}
