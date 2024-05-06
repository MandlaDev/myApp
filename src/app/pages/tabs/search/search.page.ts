import { Component, OnInit, inject } from '@angular/core';
import { Restaurant } from '../models/restaurant.model'; // Import Restaurant model/interface
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service'; // Import RestaurantService

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchQuery: string = '';
  filteredRestaurants: Restaurant[] = []; // Array to store filtered restaurants

  constructor(
    private router: Router,
    private restaurantService: RestaurantService // Inject RestaurantService
  ) { }

  ngOnInit() {
    // Get restaurant data from the service
    this.filteredRestaurants = this.restaurantService.getRestaurants();
  }

  filterRestaurants() {
    // Get all restaurants from the service
    const allRestaurants = this.restaurantService.getRestaurants();
  
    // Filter restaurants based on the search query
    this.filteredRestaurants = allRestaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      restaurant.type.toLowerCase().includes(this.searchQuery.toLowerCase())
      // Add more filters (ratings, distance, price) here
    );
  }
  

  // Function to reset search query and display all restaurants
  resetSearch() {
    this.searchQuery = '';
    this.filteredRestaurants = this.restaurantService.getRestaurants();
  }

  // Function to handle restaurant selection
  selectRestaurant(restaurant: Restaurant) {
    // Pass selected restaurant information to the cart page
    this.router.navigate(['/cart'], {
      state: { restaurant: restaurant }
    });
  }
}
