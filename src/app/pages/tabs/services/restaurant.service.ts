import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurantsSource = new BehaviorSubject<Restaurant[]>([]);

  // Expose an observable to listen for changes in restaurant data
  restaurants$ = this.restaurantsSource.asObservable();

  constructor() { 
    // Initialize the restaurant data with hardcoded values
    const initialRestaurants: Restaurant[] = [
      { name: 'Jollof of Africa', type: 'African Cuisine', rating: 5, distance: '2.59 kms away', price: '25 mins . R100 for two', image: "assets/jollof1.jpeg" },
      { name: 'Ayoba Cafe Shisanyama', type: 'African Cuisine', rating: 4.4, distance: '1.83 kms away', price: ' 15 mins . R120 ', image: "assets/Shisayanma.jpg" },
      { name: 'Spice-The Indian Kitchen', type: 'Asian Cuisine', rating: 4.1, distance: ' 0.9 km away', price: '5 mins . R80', image: "assets/Briyani.jpeg" },
      { name: 'Nandos', type: 'Portueguese Cuisine', rating: 5, distance: '9 km away', price: '5 mins . R80', image: "assets/nandos.jpeg" },
    ];

    // Store the initial restaurant data in local storage
    localStorage.setItem('restaurants', JSON.stringify(initialRestaurants));

    // Set the initial restaurant data in the BehaviorSubject
    this.restaurantsSource.next(initialRestaurants);
  }

  // Method to set and update restaurant data
  setRestaurants(restaurants: Restaurant[]) {
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
    this.restaurantsSource.next(restaurants);
  }

  // Method to get current restaurant data
  getRestaurants() {
    return this.restaurantsSource.getValue();
  }
}
