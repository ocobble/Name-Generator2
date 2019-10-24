import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {

  q1 = -1;
  q2 = -1;
  q3 = -1;
  q4 = -1;
  q5 = -1;
  q6 = -1;

  constructor() { }

  ngOnInit() {
  }

  buttonclick() {
    console.log("Value of hog is " + this.q1);
    console.log("Value of run is " + this.q2);
    console.log("Value of book is " + this.q3);
  }
}
