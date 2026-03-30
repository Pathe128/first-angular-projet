import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <p>
      home works!
    </p>
    <section>
      <form>
        <input type="text" placeholder="filter by city">
        <button class="primary" type="">Seach</button>
      </form>
      <app-housing-location [housingLocation]="housingLocation" />
    </section>
  `,
  styles: ``,
})
export class Home {

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocation: HousingLocationInfo = {
    id: 999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }
}
