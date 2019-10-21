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
  ninjaSounds = ["ka", "zu", "mi", "te", "ku", "lu", 
            "ji", "ri", "ki", "zus", "me", "ta", "rin", "to", "mo", "no", "ke", 
            "shi", "ari", "chi", "ha", "ru", "mei", "na", "fu", "zi"];
  ninjaFirstName = 'mystery';
  ninjaLastName = 'ninja';
  ninjafyTime:boolean = false;

  buttonClick() {
    console.log("Ninjafy!");
    this.ninjafyTime = true;
  }

  

    ninjafy(name:string) {
        var ninjyName:string = "";
        
        if (name.length == 0)
        {
        	return ninjyName;
        }
        
        var index = 0;
        while (index < 3 && index < name.length) { // You can change this!
            var letter = name.charAt(index);
            letter = letter.toLowerCase();
            console.log(letter.charCodeAt(0) - 97);
            ninjyName += this.ninjaSounds[letter.charCodeAt(0) - 97];
            index += 1;
        }
        
        this.ninjaName = ninjyName.charAt(0).toUpperCase() + ninjyName.substring(1, ninjyName.length);
        this.ninjafyTime = true;
    }
}
