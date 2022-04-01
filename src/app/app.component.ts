import { Component } from '@angular/core';
/**
 * @description Question 5
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sample = 'Jamaica & India';
  twoWay = "Kingston is the capital and largest city of Jamaica, located on the …."
  isDisabled = false;
  name = 'Click here';
  disable() {
    if (this.isDisabled) {
      this.isDisabled = false;
      this.name = 'show';
    } else {
      this.isDisabled = true;
      this.name = 'hide';
    }
  }
}