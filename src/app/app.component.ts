import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Name-Gen2';
  firstName = 'Olivia';
  lastName = 'Cobble';
  hogwartsHouse = 'wut';

  buttonClick() {
    console.log("Ninjafy!");
  }
}
