import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model'; // Import Restaurant model/interface

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  searchQuery: string = '';
  restaurants: Restaurant[] = []; // Array to store restaurant data
  filteredRestaurants: Restaurant[] = []; // Array to store filtered restaurants

  constructor() { 
    // Initialize restaurants with data (you can replace this with your actual data retrieval method)
    this.restaurants = [
      { name: 'Jollof of Africa', type: 'African Cuisine', rating: 5, distance: '2.59 kms away', price: '25 mins . R100 for two' ,image:"assets/jollof1.jpeg"},
      { name: 'Ayoba Cafe Shisanyama', type: 'African Cuisine', rating:   4.4, distance: '1.83 kms away', price: ' 15 mins . R120 ',image:"assets/Shisayanma.jpg" },
      { name: 'Spice-The Indian Kitchen', type: 'Asian Cuisine', rating:  4.1, distance: ' 0.9 km away', price: '5 mins . R80',image:"assets/Briyani.jpeg" },
      { name: 'Nandos', type: 'Portueguese Cuisine', rating:  5, distance: '9 km away', price: '5 mins . R80',image:"assets/nandos.jpeg" },

    ];

    // Initialize filteredRestaurants with all restaurants initially
    this.filteredRestaurants = this.restaurants.slice();
  }

  filterRestaurants() {
    // Filter restaurants based on the search query
    this.filteredRestaurants = this.restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      restaurant.type.toLowerCase().includes(this.searchQuery.toLowerCase())
      // Add more filters (ratings, distance, price) here
    );
  }
  // Function to reset search query and display all restaurants
  resetSearch() {
    this.searchQuery = '';
    this.filteredRestaurants = this.restaurants.slice();
  }
}
