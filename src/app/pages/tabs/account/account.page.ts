import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  name: string = ''; // Initialize name input
  phoneNumber: string = ''; // Initialize phone number input
  emailAddress: string = ''; // Initialize email input

  constructor() { }

  ngOnInit() {
    // Load account details from local storage when the component is initialized
    this.loadAccountDetails();
  }

  loadAccountDetails() {
    // Retrieve account details from local storage
    const storedName = localStorage.getItem('name');
    if (storedName) {
      this.name = storedName;
    }

    const storedPhoneNumber = localStorage.getItem('phoneNumber');
    if (storedPhoneNumber) {
      this.phoneNumber = storedPhoneNumber;
    }

    const storedEmailAddress = localStorage.getItem('emailAddress');
    if (storedEmailAddress) {
      this.emailAddress = storedEmailAddress;
    }
  }

  saveAccountDetails() {
    // Save account details to local storage
    localStorage.setItem('name', this.name);
    localStorage.setItem('phoneNumber', this.phoneNumber);
    localStorage.setItem('emailAddress', this.emailAddress);
  }
}
