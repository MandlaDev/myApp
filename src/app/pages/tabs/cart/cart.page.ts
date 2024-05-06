import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PaymentSuccessModalPage } from '../payment-success-modal/payment-success-modal.page'; // Import your modal component

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})


export class CartPage {
  order: any = {}; // Initialize order object
  deliveryPrice: number = 50; // Fixed delivery price
  deliveryInstructions: string = ''; // Define deliveryInstructions property

  constructor(private route: ActivatedRoute,private modalController: ModalController) {
    // Receive selected restaurant information from route state
    this.route.queryParams.subscribe(params => {
      if (params && params['state'] && params['state'].restaurant) {
        const restaurant = params['state'].restaurant;
        // Create order object with restaurant information
        this.order = {
          restaurant: restaurant.name,
          itemTotal: this.calculateItemTotal(restaurant), // Calculate item total
          deliveryPrice: this.deliveryPrice,
          totalPrice: 0 // Calculate total price
        };
        // Calculate total price
        this.calculateTotal();
      }
    });
  }

  // Function to calculate item total based on restaurant information
  calculateItemTotal(restaurant: any): number {
    // Implement your logic to calculate item total (e.g., sum of menu item prices)
    // For now, let's assume item total is fixed at R100
    return 100;
  }

  // Function to calculate total price
  calculateTotal() {
    this.order.totalPrice = this.order.itemTotal + this.order.deliveryPrice;
  }

  async makePayment() {
    // Open the payment success modal
    const modal = await this.modalController.create({
      component: PaymentSuccessModalPage,
      cssClass: 'my-custom-modal-css' // Add any custom CSS class if needed
    });
  
    // Present the modal
    await modal.present();
  }
}
