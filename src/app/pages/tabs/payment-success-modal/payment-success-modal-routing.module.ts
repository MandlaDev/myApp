import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentSuccessModalPage } from './payment-success-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentSuccessModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentSuccessModalPageRoutingModule {}
