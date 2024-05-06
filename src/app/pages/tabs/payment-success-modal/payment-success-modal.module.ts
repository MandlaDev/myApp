import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentSuccessModalPageRoutingModule } from './payment-success-modal-routing.module';

import { PaymentSuccessModalPage } from './payment-success-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentSuccessModalPageRoutingModule
  ],
  declarations: [PaymentSuccessModalPage]
})
export class PaymentSuccessModalPageModule {}
