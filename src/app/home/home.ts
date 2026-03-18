import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';

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
      <app-housing-location />
    </section>
  `,
  styles: ``,
})
export class Home {

}
